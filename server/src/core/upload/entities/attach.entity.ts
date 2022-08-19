import { Field, ObjectType } from "@nestjs/graphql";
import { Attach } from "@prisma/client";

@ObjectType()
export class AttachEntity implements Attach {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    path: string;

    @Field()
    mimetype: string;

    @Field()
    key: string;
}
