import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersEntity } from "@/users/entities/users.entity";
import { jwtSecret } from "@/auth/auth.module";
import { UsersRepository } from "@/users/repositories/users.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersRepository: UsersRepository) {
        super({
            ignoreExpiration: false,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtSecret,
            passReqToCallback: true,
        });
    }

    async validate(req: Request, payload: Payload): Promise<UsersEntity> {
        const authHeader = (req.headers as any).authorization;
        const token = authHeader?.replace("Bearer ", "");

        const user = await this.usersRepository.findOne({
            where: { id: payload.userId },
            relations: ["jwtToken"],
        });

        const notAllowedAccess =
            !user || user?.jwtToken.value !== token || user?.jwtToken.isRevoked;

        if (notAllowedAccess) throw new UnauthorizedException();

        return user;
    }
}

interface Payload {
    userId: string;
}
