import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PagesRepository } from "@/pages/repositories/pages.repository";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@/auth/guards/auth.guard";
import { PaginationArgs } from "@/helpers/args";
import {
    PageOutput,
    PagesOutput,
} from "@/pages/resolvers/pages.resolver-output";
import {
    CreatePageInput,
    UpdatePageInput,
} from "@/pages/resolvers/pages.resolver-input";
import { PagesService } from "@/pages/services/pages.service";
import { GetUser } from "@/decorators/getUser.decorator";
import { UsersEntity } from "@/users/entities/users.entity";

@UseGuards(AuthGuard)
@Resolver()
export class PagesResolver {
    constructor(
        private readonly pagesRepository: PagesRepository,
        private readonly pagesService: PagesService
    ) {}

    @Query(() => PagesOutput)
    async pages(@Args() paginationArgs: PaginationArgs): Promise<PagesOutput> {
        const count = await this.pagesRepository.count();
        const pages = await this.pagesRepository.find(paginationArgs);

        return { count, items: pages };
    }

    @Query(() => PageOutput)
    async page(
        @Args("id", { nullable: true }) id: string,
        @Args("path", { nullable: true }) path: string
    ): Promise<PageOutput> {
        const page = await this.pagesService.findPage(id, path);

        return { item: page };
    }

    @Query(() => PageOutput)
    @Mutation(() => PageOutput)
    async createPage(
        @GetUser() user: UsersEntity,
        @Args("createPageInput") createPageInput: CreatePageInput
    ): Promise<PageOutput> {
        const page = await this.pagesService.createPage(user, createPageInput);

        return { item: page };
    }

    @Mutation(() => PageOutput)
    async updatePage(
        @Args("id") id: string,
        @Args("updatePageInput") updatePageInput: UpdatePageInput
    ): Promise<PageOutput> {
        const page = await this.pagesService.updatePage(id, updatePageInput);

        return { item: page };
    }

    @Mutation(() => Boolean)
    async deletePage(@Args("id") id: string): Promise<boolean> {
        await this.pagesRepository.delete(id);

        return true;
    }
}
