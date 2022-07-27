import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsService } from "@/posts/services/posts.service";
import { PostsResolver } from "@/posts/resolvers/posts.resolver";
import { PostsEntity } from "@/posts/entities/posts.entity";

@Module({
    imports: [TypeOrmModule.forFeature([PostsEntity])],
    exports: [PostsResolver, PostsService],
    providers: [PostsResolver, PostsService],
})
export class PostsModule {}
