import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "@/users/services/users.service";
import { LoginInput } from "@/auth/resolvers/auth.resolver-input";
import { LoginOutput } from "@/auth/resolvers/auth.resolver-output";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import * as _ from "lodash";
import { UsersEntity } from "@/users/entities/users.entity";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async login(loginInput: LoginInput): Promise<LoginOutput> {
        const { email, password } = loginInput;
        const parsedEmail = _.toLower(email);

        const user = await this.usersService.findOne({ where: { email: parsedEmail } });
        if (!user) throw new BadRequestException(`Neplatné údaje`);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new BadRequestException(`Neplatné údaje`);

        const token = this.jwtService.sign({
            id: user.id,
        });

        return { token, user };
    }

    async refresh(user: UsersEntity) {}
}
