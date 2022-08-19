import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { AuthGuard } from "@/auth/guards/auth.guard";
import { GetUser } from "@/decorators";
import { UserEntity } from "@/user/entities/user.entity";
import { CreateUserInput } from "@/user/resolvers/user.resolver-input";
import { UserOutput, UsersOutput } from "@/user/resolvers/user.resolver-output";
import { UserService } from "@/user/services/user.service";

@UseGuards(AuthGuard)
@Resolver(() => UserEntity)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => UsersOutput)
    async users(): Promise<UsersOutput> {
        const count = await this.userService.countAll();
        const users = await this.userService.findUsers();

        return { count, items: users };
    }

    @Query(() => UserOutput)
    async user(@Args("id") id: string): Promise<UserOutput> {
        const user = await this.userService.findUser(id);

        return { item: user };
    }

    @Query(() => UserOutput)
    async me(@GetUser() user: UserEntity): Promise<UserOutput> {
        return { item: user };
    }

    @Mutation(() => UserOutput)
    async createUser(
        @Args("createUserInput") createUserInput: CreateUserInput
    ): Promise<UserOutput> {
        const user = await this.userService.createUser(createUserInput);

        return { item: user };
    }
}
