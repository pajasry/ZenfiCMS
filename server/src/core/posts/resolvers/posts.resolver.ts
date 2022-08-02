import { Args, Query, Resolver } from "@nestjs/graphql";
import { PostsEntity } from "@/posts/entities/posts.entity";
import { PostsRepository } from "@/posts/repositories/posts.repository";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@/auth/guards/auth.guard";
import { PaginationArgs } from "@/helpers/args";
import { PostOutput, PostsOutput } from "@/posts/resolvers/posts.resolver-output";

@UseGuards(AuthGuard)
@Resolver(() => PostsEntity)
export class PostsResolver {
    constructor(private readonly postsRepository: PostsRepository) {}

    @Query(() => PostsOutput)
    async posts(@Args() paginationArgs: PaginationArgs): Promise<PostsOutput> {
        const count = await this.postsRepository.count();
        const posts = await this.postsRepository.find(paginationArgs);

        return { count, items: posts };
    }

    @Query(() => PostOutput)
    async post(@Args("id") id: string): Promise<PostOutput> {
        const post = await this.postsRepository.findOneById(id);

        return { item: post };
    }
}
