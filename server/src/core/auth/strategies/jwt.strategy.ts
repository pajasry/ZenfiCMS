import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersEntity } from "@/users/entities/users.entity";
import { UsersService } from "@/users/services/users.service";
import { jwtSecret } from "@/auth/auth.module";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({
            ignoreExpiration: false,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtSecret,
        });
    }

    async validate({ id }: Payload): Promise<UsersEntity> {
        const user = await this.usersService.findOne({ where: { id } });
        if (!user) throw new UnauthorizedException();

        return user;
    }
}

interface Payload {
    id: string;
}
