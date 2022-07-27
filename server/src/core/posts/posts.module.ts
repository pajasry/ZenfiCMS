import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsEntity, PostsResolver, PostsService } from "@/core/posts";

@Module({
    imports: [TypeOrmModule.forFeature([PostsEntity])],
    exports: [PostsResolver, PostsService],
    providers: [PostsResolver, PostsService],
})
export class PostsModule {}
