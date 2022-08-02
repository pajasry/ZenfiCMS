import { UsersEntity } from "@/users/entities/users.entity";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { LoginInput, ResetPasswordInput } from "@/auth/resolvers/auth.resolver-input";
import { AuthService } from "@/auth/services/auth.service";
import { LoginOutput } from "@/auth/resolvers/auth.resolver-output";

@Resolver(() => UsersEntity)
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => Boolean)
    async resetPassword(
        @Args("resetPasswordInput") resetPasswordInput: ResetPasswordInput
    ): Promise<boolean> {
        return this.authService.resetPassword(resetPasswordInput);
    }

    @Mutation(() => LoginOutput)
    async login(@Args("loginInput") loginInput: LoginInput): Promise<LoginOutput> {
        return this.authService.login(loginInput);
    }
}
