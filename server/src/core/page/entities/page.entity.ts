import { Field, GraphQLISODateTime, ObjectType } from "@nestjs/graphql";
import { Page } from "@prisma/client";

import { PageStatusEntity } from "@/page/entities/pageStatus.entity";
import { AttachEntity } from "@/upload/entities/attach.entity";
import { UserEntity } from "@/user/entities/user.entity";

@ObjectType()
export class PageEntity implements Page {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    path: string;

    @Field()
    description: string;

    @Field(() => AttachEntity, { nullable: true })
    thumbnail?: AttachEntity;

    @Field({ nullable: true })
    thumbnailId: string | null;

    @Field()
    isHomepage: boolean;

    @Field(() => [PageEntity], { nullable: true })
    subpages?: PageEntity[] | Page[];

    @Field(() => PageEntity, { nullable: true })
    parent?: PageEntity;

    @Field({ nullable: true })
    parentId: string | null;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;

    @Field(() => PageStatusEntity)
    status: PageStatusEntity;

    @Field()
    statusId: string;

    @Field(() => UserEntity)
    author: UserEntity;

    @Field()
    authorId: string;
}
