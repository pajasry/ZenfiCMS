import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "@/auth/strategies/jwt.strategy";
import { UsersModule } from "@/users/users.module";
import { AuthService } from "@/auth/services/auth.service";
import { AuthResolver } from "@/auth/resolvers/auth.resolver";

export const jwtSecret = "Xd523ORx";

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: "jwt",
        }),
        JwtModule.register({
            secret: jwtSecret,
            signOptions: { expiresIn: "1h" },
        }),
        UsersModule,
    ],
    providers: [AuthService, AuthResolver, JwtStrategy],
    exports: [AuthService, AuthResolver],
})
export class AuthModule {}
