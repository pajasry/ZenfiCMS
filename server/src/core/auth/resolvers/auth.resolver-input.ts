import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginInput {
    @Field()
    email: string;

    @Field()
    password: string;
}

@InputType()
export class ResetPasswordInput {
    @Field()
    email: string;
}
