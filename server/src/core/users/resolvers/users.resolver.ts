import { UsersRepository } from "@/users/repositories/users.repository";
import { CreateUserInput } from "@/users/resolvers/users.resolver-input";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UsersService } from "@/users/services/users.service";
import { UsersEntity } from "@/users/entities/users.entity";
import { AuthGuard } from "@/auth/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { GetUser } from "@/decorators/getUser.decorator";
import { UserOutput, UsersOutput } from "@/users/resolvers/users.resolver-output";

@UseGuards(AuthGuard)
@Resolver(() => UsersEntity)
export class UsersResolver {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly usersService: UsersService
    ) {}

    @Query(() => UsersOutput)
    async users(): Promise<UsersOutput> {
        const count = await this.usersRepository.count();
        const users = await this.usersRepository.find();

        return { count, items: users };
    }

    @Query(() => UserOutput)
    async user(@Args("id") id: string): Promise<UserOutput> {
        const user = await this.usersRepository.findOneById(id);

        return { item: user };
    }

    @Query(() => UserOutput)
    async me(@GetUser() user: UsersEntity): Promise<UserOutput> {
        return { item: user };
    }

    @Mutation(() => UserOutput)
    async createUser(
        @Args("createUserInput") createUserInput: CreateUserInput
    ): Promise<UserOutput> {
        const user = await this.usersService.createUser(createUserInput);

        return { item: user };
    }
}
