import { Args, Query, Resolver } from "@nestjs/graphql";
import { UsersEntity, UsersService } from "@/core/users";

@Resolver(() => UsersEntity)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(() => [UsersEntity])
    async users(): Promise<UsersEntity[]> {
        return this.usersService.findAll();
    }

    @Query(() => UsersEntity)
    async user(@Args("id") id: string): Promise<UsersEntity> {
        return this.usersService.findOne({ where: { id } });
    }
}
