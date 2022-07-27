import { Args, Query, Resolver } from "@nestjs/graphql";
import { PagesEntity, PagesService } from "@/core/pages";

@Resolver(() => PagesEntity)
export class PagesResolver {
    constructor(private readonly pagesService: PagesService) {}

    @Query(() => [PagesEntity])
    async pages(): Promise<PagesEntity[]> {
        return this.pagesService.findAll();
    }

    @Query(() => PagesEntity)
    async page(@Args("id") id: string): Promise<PagesEntity> {
        return this.pagesService.findOne({ where: { id } });
    }
}
