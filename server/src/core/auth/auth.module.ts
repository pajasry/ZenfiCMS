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
import { EmailsModule } from "@/emails/emails.module";
import { PasswordTokensRepository } from "@/auth/repositories/passwordTokens.repository";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        forwardRef(() => UsersModule),
        TypeOrmModule.forFeature([UsersRepository, JwtTokensRepository, PasswordTokensRepository]),
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
        EmailsModule,
    ],
    providers: [AuthService, AuthResolver, JwtStrategy],
    exports: [AuthService, AuthResolver],
})
export class AuthModule {}
