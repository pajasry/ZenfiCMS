import { forwardRef, Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "@/auth/strategies/jwt.strategy";
import { UsersModule } from "@/users/users.module";
import { AuthService } from "@/auth/services/auth.service";
import { AuthResolver } from "@/auth/resolvers/auth.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtTokensRepository } from "@/auth/repositories/jwtTokens.repository";
import { UsersRepository } from "@/users/repositories/users.repository";

//TODO: REMOVE THIS LINE
export const jwtSecret = "Xd523ORx";

@Module({
    imports: [
        forwardRef(() => UsersModule),
        TypeOrmModule.forFeature([UsersRepository, JwtTokensRepository]),
        PassportModule.register({
            defaultStrategy: "jwt",
        }),
        JwtModule.register({
            secret: jwtSecret,
        }),
    ],
    providers: [AuthService, AuthResolver, JwtStrategy],
    exports: [AuthService, AuthResolver],
})
export class AuthModule {}
