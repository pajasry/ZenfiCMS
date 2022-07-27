import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity, UsersResolver, UsersService } from "@/core/users";

@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity])],
    exports: [UsersResolver, UsersService],
    providers: [UsersResolver, UsersService],
})
export class UsersModule {}
