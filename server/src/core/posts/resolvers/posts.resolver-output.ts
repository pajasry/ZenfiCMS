import { ObjectType } from "@nestjs/graphql";
import { ItemOutput, ItemsOutput } from "@/helpers/outputs";
import { PostsEntity } from "@/posts/entities/posts.entity";

@ObjectType()
export class PostsOutput extends ItemsOutput(PostsEntity)<PostsEntity> {}

@ObjectType()
export class PostOutput extends ItemOutput(PostsEntity)<PostsEntity> {}
