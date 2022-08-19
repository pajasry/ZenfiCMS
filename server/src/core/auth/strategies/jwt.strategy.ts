import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

import { PrismaService } from "@/prisma/services/prisma.service";
import { UserEntity } from "@/user/entities/user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly prismaService: PrismaService) {
        super({
            ignoreExpiration: false,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
            passReqToCallback: true,
        });
    }

    async validate(req: Request, payload: Payload): Promise<UserEntity> {
        const authHeader = (req.headers as any).authorization;
        const token = authHeader?.replace("Bearer ", "");

        const user = await this.prismaService.user.findUnique({
            where: {
                id: payload.userId,
            },
            include: { jwtToken: true, passwordToken: true },
        });

        if (!user) throw new UnauthorizedException();

        const { jwtToken } = user;

        if (jwtToken.value === token && !jwtToken.isRevoked) return user;

        throw new UnauthorizedException();
    }
}

interface Payload {
    userId: string;
}
