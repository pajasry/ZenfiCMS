import { Args, Query, Resolver } from "@nestjs/graphql";
import { PagesEntity } from "@/pages/entities/pages.entity";
import { PagesService } from "@/pages/services/pages.service";

@Resolver(() => PagesResolver)
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
