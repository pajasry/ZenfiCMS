import { Field, GraphQLISODateTime, ObjectType } from "@nestjs/graphql";
import { User } from "@prisma/client";

import { JwtTokenEntity } from "@/auth/entities/jwtToken.entity";
import { PasswordTokenEntity } from "@/auth/entities/passwordToken.entity";
import { PageEntity } from "@/page/entities/page.entity";

@ObjectType()
export class UserEntity implements User {
    @Field()
    id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    password: string;

    jwtToken?: JwtTokenEntity;

    jwtTokenId: string | null;

    passwordToken?: PasswordTokenEntity;

    passwordTokenId: string | null;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;

    pages?: PageEntity[];
}
