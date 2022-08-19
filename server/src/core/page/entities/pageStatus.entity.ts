import { Field, ObjectType } from "@nestjs/graphql";
import { PageStatus } from "@prisma/client";

@ObjectType()
export class PageStatusEntity implements PageStatus {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    variant: string;
}
