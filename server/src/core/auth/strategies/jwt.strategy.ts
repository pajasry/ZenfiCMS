import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersEntity } from "@/users/entities/users.entity";
import { UsersRepository } from "@/users/repositories/users.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersRepository: UsersRepository) {
        super({
            ignoreExpiration: false,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
            passReqToCallback: true,
        });
    }

    async validate(req: Request, payload: Payload): Promise<UsersEntity> {
        const authHeader = (req.headers as any).authorization;
        const token = authHeader?.replace("Bearer ", "");

        const user = await this.usersRepository.findOneById(payload.userId);
        if (!user) throw new UnauthorizedException();

        const { jwtToken } = user;

        if (jwtToken.value === token && !jwtToken.isRevoked) return user;

        throw new UnauthorizedException();
    }
}

interface Payload {
    userId: string;
}
