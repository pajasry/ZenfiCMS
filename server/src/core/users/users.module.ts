import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersResolver } from "@/users/resolvers/users.resolver";
import { UsersService } from "@/users/services/users.service";
import { UsersRepository } from "@/users/repositories/users.repository";
import { JwtTokensRepository } from "@/auth/repositories/jwtTokens.repository";
import { AuthModule } from "@/auth/auth.module";

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([UsersRepository, JwtTokensRepository]),
    ],
    exports: [UsersResolver, UsersService],
    providers: [UsersResolver, UsersService],
})
export class UsersModule {}
