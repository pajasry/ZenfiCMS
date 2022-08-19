import { Field, ObjectType } from "@nestjs/graphql";
import { JwtToken } from "@prisma/client";

@ObjectType()
export class JwtTokenEntity implements JwtToken {
    @Field()
    id: string;

    @Field()
    value: string;

    @Field()
    isRevoked: boolean;
}
