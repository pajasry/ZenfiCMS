import { Field, ObjectType } from "@nestjs/graphql";
import { UsersEntity } from "@/users/entities/users.entity";

@ObjectType()
export class LoginOutput {
    @Field()
    token: string;

    @Field()
    user: UsersEntity;
}
