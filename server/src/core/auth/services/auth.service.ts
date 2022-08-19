import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import * as _ from "lodash";

import {
    CreatePasswordInput,
    LoginInput,
    ResetPasswordInput,
} from "@/auth/resolvers/auth.resolver-input";
import { LoginOutput } from "@/auth/resolvers/auth.resolver-output";
import { EmailService } from "@/email/services/email.service";
import { InvalidDataException } from "@/exceptions";
import { PrismaService } from "@/prisma/services/prisma.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly jwtService: JwtService,
        private readonly emailService: EmailService
    ) {}

    /**
     * Hash password with bcrypt
     */
    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt();
        return bcrypt.hash(password, salt);
    }

    /**
     * Generate jwt token
     */
    generateJwtToken(userId: string, expiresIn = "3d"): string {
        return this.jwtService.sign({ userId }, { expiresIn });
    }

    /**
     * Login user
     */
    async login(loginInput: LoginInput): Promise<LoginOutput> {
        const { email, password } = loginInput;
        const parsedEmail = _.toLower(email);

        const user = await this.prismaService.user.findUniqueOrThrow({
            where: {
                email: parsedEmail,
            },
            include: {
                jwtToken: true,
            },
        });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new InvalidDataException();

        if (user.jwtToken?.isRevoked) throw new UnauthorizedException();

        const jwtToken = this.generateJwtToken(user.id);

        const updatedUser = await this.prismaService.user.update({
            where: {
                id: user.id,
            },
            data: {
                jwtToken: {
                    upsert: {
                        update: {
                            value: jwtToken,
                        },
                        create: {
                            value: jwtToken,
                        },
                    },
                },
            },
            include: { jwtToken: true },
        });

        return { token: jwtToken, user: updatedUser };
    }

    /**
     * Reset user password
     */
    async resetPassword(
        resetPasswordInput: ResetPasswordInput
    ): Promise<boolean> {
        const { email } = resetPasswordInput;

        const user = await this.prismaService.user.findUniqueOrThrow({
            where: {
                email,
            },
        });

        const passwordToken = this.generateJwtToken(user.id);

        const updatedUser = await this.prismaService.user.update({
            where: { email },
            data: {
                passwordToken: {
                    upsert: {
                        update: {
                            value: passwordToken,
                            isRevoked: false,
                        },
                        create: {
                            value: passwordToken,
                            isRevoked: false,
                        },
                    },
                },
            },
            include: {
                passwordToken: true,
            },
        });

        await this.emailService.sendResetPasswordMail(updatedUser);

        return true;
    }

    /**
     * Create new user password
     */
    async createPassword(
        createPasswordInput: CreatePasswordInput
    ): Promise<boolean> {
        const { password, token } = createPasswordInput;

        try {
            await this.jwtService.verifyAsync(token, {
                ignoreExpiration: false,
            });
        } catch {
            throw new UnauthorizedException();
        }

        const hashedPassword = await this.hashPassword(password);
        const payload = this.jwtService.decode(token) as { userId: string };

        await this.prismaService.user.update({
            where: {
                id: payload?.userId,
            },
            data: {
                password: hashedPassword,
                passwordToken: {
                    update: {
                        isRevoked: true,
                    },
                },
            },
        });

        return true;
    }
}
