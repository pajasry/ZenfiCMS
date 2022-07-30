import { PostsEntity } from "@/posts/entities/posts.entity";

export type CreatePostRepositoryDto = Pick<
    PostsEntity,
    "name" | "author" | "status" | "description"
>;
