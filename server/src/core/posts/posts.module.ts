import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsService } from "@/posts/services/posts.service";
import { PostsResolver } from "@/posts/resolvers/posts.resolver";
import { PostsRepository } from "@/posts/repositories/posts.repository";

@Module({
    imports: [TypeOrmModule.forFeature([PostsRepository])],
    exports: [PostsResolver, PostsService],
    providers: [PostsResolver, PostsService],
})
export class PostsModule {}
