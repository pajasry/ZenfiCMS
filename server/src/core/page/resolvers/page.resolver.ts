import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { AuthGuard } from "@/auth/guards/auth.guard";
import { GetUser } from "@/decorators";
import { PagesArgs } from "@/page/resolvers/page.resolver-args";
import {
    CreatePageInput,
    UpdatePageInput,
} from "@/page/resolvers/page.resolver-input";
import {
    ClientPageOutput,
    PageOutput,
    PagesOutput,
} from "@/page/resolvers/page.resolver-output";
import { PageService } from "@/page/services/page.service";
import { UserEntity } from "@/user/entities/user.entity";

@Resolver()
export class PageResolver {
    constructor(private readonly pageService: PageService) {}

    @Query(() => ClientPageOutput)
    async clientPage(@Args("path") path: string): Promise<ClientPageOutput> {
        const page = await this.pageService.findClientPage(path);

        return { item: page };
    }

    @UseGuards(AuthGuard)
    @Query(() => PagesOutput)
    async pages(@Args() pagesArgs: PagesArgs): Promise<PagesOutput> {
        const count = await this.pageService.countAll();
        const pages = await this.pageService.findPages(pagesArgs);

        return { count, items: pages };
    }

    @UseGuards(AuthGuard)
    @Query(() => PageOutput)
    async page(@Args("id") id: string): Promise<PageOutput> {
        const page = await this.pageService.findPage(id);

        return { item: page };
    }

    @UseGuards(AuthGuard)
    @Mutation(() => PageOutput)
    async createPage(
        @GetUser() user: UserEntity,
        @Args("createPageInput") createPageInput: CreatePageInput
    ): Promise<PageOutput> {
        const page = await this.pageService.createPage(user, createPageInput);

        return { item: page };
    }

    @UseGuards(AuthGuard)
    @Mutation(() => PageOutput)
    async updatePage(
        @Args("id") id: string,
        @Args("updatePageInput") updatePageInput: UpdatePageInput
    ): Promise<PageOutput> {
        const page = await this.pageService.updatePage(id, updatePageInput);

        return { item: page };
    }

    @UseGuards(AuthGuard)
    @Mutation(() => Boolean)
    async deletePage(@Args("id") id: string): Promise<PageOutput> {
        const page = await this.pageService.deletePage(id);

        return { item: page };
    }

    @UseGuards(AuthGuard)
    @Mutation(() => Boolean)
    async setHomepage(@Args("id") id: string): Promise<boolean> {
        return this.pageService.setHomepage(id);
    }
}
