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

@InputType()
export class CreatePasswordInput {
    @Field()
    token: string;

    @Field()
    password: string;
}
