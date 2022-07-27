import { Args, Query, Resolver } from "@nestjs/graphql";
import { PostsEntity } from "@/posts/entities/posts.entity";
import { PostsService } from "@/posts/services/posts.service";

@Resolver(() => PostsEntity)
export class PostsResolver {
    constructor(private readonly postsService: PostsService) {}

    @Query(() => [PostsEntity])
    async posts(): Promise<PostsEntity[]> {
        return this.postsService.findAll();
    }

    @Query(() => PostsEntity)
    async post(@Args("id") id: string): Promise<PostsEntity> {
        return this.postsService.findOne({ where: { id } });
    }
}
