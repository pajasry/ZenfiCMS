import { Args, Query, Resolver } from "@nestjs/graphql";
import { PostsEntity } from "@/posts/entities/posts.entity";
import { PostsRepository } from "@/posts/repositories/posts.repository";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@/auth/guards/auth.guard";
import { PaginationArgs } from "@/helpers/args";
import { PostsOutput } from "@/posts/resolvers/posts.resolver-output";

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

    @Query(() => PostsEntity)
    async post(@Args("id") id: string): Promise<PostsEntity> {
        return this.postsRepository.findOneById(id);
    }
}
