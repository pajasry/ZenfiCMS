import { Field, ObjectType } from "@nestjs/graphql";

import { UserEntity } from "@/user/entities/user.entity";

@ObjectType()
export class LoginOutput {
    @Field()
    token: string;

    @Field()
    user: UserEntity;
}
