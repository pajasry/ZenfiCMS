import { Args, Query, Resolver } from "@nestjs/graphql";
import { PagesEntity } from "@/pages/entities/pages.entity";
import { PagesRepository } from "@/pages/repositories/pages.repository";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@/auth/guards/auth.guard";
import { PaginationArgs } from "@/helpers/args";
import { PagesOutput } from "@/pages/resolvers/pages.resolver-output";

@UseGuards(AuthGuard)
@Resolver(() => PagesEntity)
export class PagesResolver {
    constructor(private readonly pagesRepository: PagesRepository) {}

    @Query(() => PagesOutput)
    async pages(@Args() paginationArgs: PaginationArgs): Promise<PagesOutput> {
        const count = await this.pagesRepository.count();
        const pages = await this.pagesRepository.find(paginationArgs);

        return { count, items: pages };
    }

    @Query(() => PagesEntity)
    async page(@Args("id") id: string): Promise<PagesEntity> {
        return this.pagesRepository.findOneById(id);
    }
}
