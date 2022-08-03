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

        const user = await this.usersRepository.findOneById(payload.userId);
        if (!user) throw new UnauthorizedException();

        const { jwtToken, passwordToken } = user;

        const isValidJwtToken = jwtToken.value === token && !jwtToken.isRevoked;
        const isValidPassToken = passwordToken?.value === token && !passwordToken?.isRevoked;

        if (isValidJwtToken || isValidPassToken) return user;

        throw new UnauthorizedException();
    }
}

interface Payload {
    userId: string;
}
