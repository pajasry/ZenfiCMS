import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { UsersEntity } from "@/users/entities/users.entity";
import { UsersRepository } from "@/users/repositories/users.repository";
import { CreateUserInput } from "@/users/resolvers/users.resolver-input";
import { JwtTokensRepository } from "@/auth/repositories/jwtTokens.repository";
import { AuthService } from "@/auth/services/auth.service";
import * as bcrypt from "bcrypt";
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

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = this.usersRepository.create({
            username,
            email: parsedEmail,
            password: hashedPassword,
        });

        const generatedToken = this.authService.generateJWTToken(user.id);
        user.jwtToken = this.jwtTokensRepository.create({
            value: generatedToken,
        });

        return this.usersRepository.save(user);
    }
}
