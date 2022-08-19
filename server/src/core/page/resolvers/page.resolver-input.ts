import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePageInput {
    @Field()
    name: string;

    @Field()
    description: string;

    @Field({ nullable: true })
    statusId?: string;

    @Field({ nullable: true })
    path?: string;

    @Field(() => [String], { nullable: true })
    subpagesIds?: string[];
}

@InputType()
export class UpdatePageInput {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    path?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    statusId?: string;

    @Field(() => [String], { nullable: true })
    subpagesIds?: string[];
}
