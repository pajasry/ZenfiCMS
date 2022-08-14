import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { UsersEntity } from "@/users/entities/users.entity";
import { UsersRepository } from "@/users/repositories/users.repository";
import { CreateUserInput } from "@/users/resolvers/users.resolver-input";
import { JwtTokensRepository } from "@/auth/repositories/jwtTokens.repository";
import { AuthService } from "@/auth/services/auth.service";
import * as _ from "lodash";

@Injectable()
export class UsersService {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,
        private readonly usersRepository: UsersRepository,
        private readonly jwtTokensRepository: JwtTokensRepository
    ) {}

    async createUser(createUserInput: CreateUserInput): Promise<UsersEntity> {
        const { username, password, email } = createUserInput;

        const parsedEmail = _.toLower(email);
        const hashedPassword = await this.authService.hashPassword(password);

        const user = this.usersRepository.create({
            username,
            email: parsedEmail,
            password: hashedPassword,
        });

        const generatedJwtToken = this.authService.generateJwtToken(user.id);
        user.jwtToken = this.jwtTokensRepository.create({
            value: generatedJwtToken,
        });

        return this.usersRepository.save(user);
    }
}
