import { Injectable } from "@nestjs/common";
import * as _ from "lodash";

import { AuthService } from "@/auth/services/auth.service";
import { PrismaService } from "@/prisma/services/prisma.service";
import { UserEntity } from "@/user/entities/user.entity";
import { CreateUserInput } from "@/user/resolvers/user.resolver-input";

@Injectable()
export class UserService {
    constructor(
        private readonly authService: AuthService,
        private readonly prismaService: PrismaService
    ) {}

    /**
     * Find all users
     */
    findUsers(): Promise<UserEntity[]> {
        return this.prismaService.user.findMany();
    }

    /**
     * Find user by id
     */
    findUser(id: string): Promise<UserEntity> {
        return this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
    }

    /**
     * Count all users
     */
    countAll(): Promise<number> {
        return this.prismaService.user.count();
    }

    /**
     * Create user
     */
    async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
        const { username, password, email } = createUserInput;

        const parsedEmail = _.toLower(email);
        const hashedPassword = await this.authService.hashPassword(password);

        const user = await this.prismaService.user.create({
            data: {
                username,
                email: parsedEmail,
                password: hashedPassword,
            },
        });

        const jwtToken = this.authService.generateJwtToken(user.id);

        return this.prismaService.user.update({
            where: { id: user.id },
            data: {
                jwtToken: {
                    create: {
                        value: jwtToken,
                    },
                },
            },
        });
    }
}
