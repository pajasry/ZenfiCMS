import {
    CreatePasswordInput,
    LoginInput,
    ResetPasswordInput,
} from "@/auth/resolvers/auth.resolver-input";
import { LoginOutput } from "@/auth/resolvers/auth.resolver-output";
import { InvalidDataException } from "@/exceptions/invalidData.exception";
import { UsersRepository } from "@/users/repositories/users.repository";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import * as _ from "lodash";
import { EmailsService } from "@/emails/services/emails.service";
import { PasswordTokensRepository } from "@/auth/repositories/passwordTokens.repository";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly passwordTokensRepository: PasswordTokensRepository,
        private readonly jwtService: JwtService,
        private readonly emailsService: EmailsService
    ) {}

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt();
        return bcrypt.hash(password, salt);
    }

    generateJwtToken(userId: string, expiresIn = "3d"): string {
        return this.jwtService.sign({ userId }, { expiresIn });
    }

    async login(loginInput: LoginInput): Promise<LoginOutput> {
        const { email, password } = loginInput;
        const parsedEmail = _.toLower(email);

        const user = await this.usersRepository.findOneByEmail(parsedEmail);
        if (!user) throw new InvalidDataException();

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new InvalidDataException();

        if (user.jwtToken.isRevoked) throw new UnauthorizedException();

        const generatedToken = this.generateJwtToken(user.id);
        user.jwtToken.value = generatedToken;

        const savedUser = await this.usersRepository.save(user);
        return { token: generatedToken, user: savedUser };
    }

    async resetPassword(resetPasswordInput: ResetPasswordInput): Promise<boolean> {
        const { email } = resetPasswordInput;
        const user = await this.usersRepository.findOneByEmailOrFail(email);

        user.passwordToken = this.passwordTokensRepository.create({
            value: this.generateJwtToken(user.id),
            isRevoked: false,
        });

        await this.emailsService.sendResetPasswordMail(user);
        await this.usersRepository.save(user);

        return true;
    }

    async createPassword(createPasswordInput: CreatePasswordInput): Promise<boolean> {
        const { password, token } = createPasswordInput;

        try {
            await this.jwtService.verifyAsync(token, { ignoreExpiration: false });
        } catch {
            throw new UnauthorizedException();
        }

        const payload = this.jwtService.decode(token) as { userId: string };

        const user = await this.usersRepository.findOneByIdOrFail(payload?.userId);

        user.password = await this.hashPassword(password);
        user.passwordToken.isRevoked = true;

        await this.usersRepository.save(user);

        return true;
    }
}
