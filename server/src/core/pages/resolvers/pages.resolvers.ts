import { Args, Query, Resolver } from "@nestjs/graphql";
import { PagesEntity, PagesService } from "@/core/pages";

@Resolver(() => PagesEntity)
export class PagesResolvers {
    constructor(private readonly pagesService: PagesService) {}

    @Query(() => [PagesEntity])
    async pages() {
        return this.pagesService.findAll();
    }

    @Query(() => PagesEntity)
    async page(@Args("id") id: string) {
        return this.pagesService.findOneOrFail({ where: { id } });
    }
}
