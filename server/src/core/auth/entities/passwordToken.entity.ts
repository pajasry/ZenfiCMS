import { Field, GraphQLISODateTime, ObjectType } from "@nestjs/graphql";
import { PasswordToken } from "@prisma/client";

@ObjectType()
export class PasswordTokenEntity implements PasswordToken {
    @Field()
    id: string;

    @Field()
    value: string;

    @Field()
    isRevoked: boolean;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;
}
