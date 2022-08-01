import { ObjectType } from "@nestjs/graphql";
import { ItemsOutput } from "@/helpers/output";
import { PostsEntity } from "@/posts/entities/posts.entity";

@ObjectType()
export class PostsOutput extends ItemsOutput(PostsEntity) {}
