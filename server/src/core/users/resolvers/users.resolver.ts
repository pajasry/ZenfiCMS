import { UsersRepository } from "@/users/repositories/users.repository";
import { CreateUserInput } from "@/users/resolvers/users.resolver-input";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UsersService } from "@/users/services/users.service";
import { UsersEntity } from "@/users/entities/users.entity";
import { AuthGuard } from "@/auth/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { GetUser } from "@/decorators/getUser.decorator";

@UseGuards(AuthGuard)
@Resolver(() => UsersEntity)
export class UsersResolver {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly usersService: UsersService
    ) {}

    @Query(() => [UsersEntity])
    async users(): Promise<UsersEntity[]> {
        return this.usersRepository.find();
    }

    @Query(() => UsersEntity)
    async user(@Args("id") id: string): Promise<UsersEntity> {
        return this.usersRepository.findOneById(id);
    }

    @Query(() => UsersEntity)
    async me(@GetUser() user: UsersEntity): Promise<UsersEntity> {
        return user;
    }

    @Mutation(() => UsersEntity)
    createUser(@Args("createUserInput") createUserInput: CreateUserInput): Promise<UsersEntity> {
        return this.usersService.createUser(createUserInput);
    }
}
