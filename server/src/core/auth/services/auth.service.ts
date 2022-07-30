import { LoginInput } from "@/auth/resolvers/auth.resolver-input";
import { LoginOutput } from "@/auth/resolvers/auth.resolver-output";
import { InvalidDataException } from "@/exceptions/invalidData.exception";
import { UsersRepository } from "@/users/repositories/users.repository";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import * as _ from "lodash";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly jwtService: JwtService
    ) {}

    generateJWTToken(userId: string, expiresIn = "3d"): string {
        return this.jwtService.sign({ userId }, { expiresIn });
    }

    async login(loginInput: LoginInput): Promise<LoginOutput> {
        const { email, password } = loginInput;
        const parsedEmail = _.toLower(email);

        const user = await this.usersRepository.findOne({
            where: { email: parsedEmail },
            relations: ["jwtToken"],
        });
        if (!user) throw new InvalidDataException();

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new InvalidDataException();

        const generatedToken = this.generateJWTToken(user.id);
        user.jwtToken.value = generatedToken;

        const savedUser = await this.usersRepository.save(user);
        return { token: generatedToken, user: savedUser };
    }
}
