import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { AuthResolver } from "@/auth/resolvers/auth.resolver";
import { AuthService } from "@/auth/services/auth.service";
import { JwtStrategy } from "@/auth/strategies/jwt.strategy";
import { EmailModule } from "@/email/email.module";

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: "jwt",
        }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async () => ({
                secret: process.env.JWT_SECRET,
            }),
            inject: [ConfigService],
        }),
        EmailModule,
    ],
    providers: [AuthService, AuthResolver, JwtStrategy],
    exports: [AuthService, AuthResolver],
})
export class AuthModule {}
