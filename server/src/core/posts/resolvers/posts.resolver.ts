import { Args, Query, Resolver } from "@nestjs/graphql";
import { PostsEntity } from "@/posts/entities/posts.entity";
import { PostsRepository } from "@/posts/repositories/posts.repository";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@/auth/guards/auth.guard";

@UseGuards(AuthGuard)
@Resolver(() => PostsEntity)
export class PostsResolver {
    constructor(private readonly postsRepository: PostsRepository) {}

    @Query(() => [PostsEntity])
    async posts(): Promise<PostsEntity[]> {
        return this.postsRepository.find();
    }

    @Query(() => PostsEntity)
    async post(@Args("id") id: string): Promise<PostsEntity> {
        return this.postsRepository.findOneById(id);
    }
}
