import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersResolver } from "@/users/resolvers/users.resolver";
import { UsersService } from "@/users/services/users.service";
import { UsersEntity } from "@/users/entities/users.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity])],
    exports: [UsersResolver, UsersService],
    providers: [UsersResolver, UsersService],
})
export class UsersModule {}
