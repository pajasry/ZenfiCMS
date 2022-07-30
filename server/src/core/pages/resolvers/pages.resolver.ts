import { Args, Query, Resolver } from "@nestjs/graphql";
import { PagesEntity } from "@/pages/entities/pages.entity";
import { PagesRepository } from "@/pages/repositories/pages.repository";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@/auth/guards/auth.guard";

@UseGuards(AuthGuard)
@Resolver(() => PagesEntity)
export class PagesResolver {
    constructor(private readonly pagesRepository: PagesRepository) {}

    @Query(() => [PagesEntity])
    async pages(): Promise<PagesEntity[]> {
        return this.pagesRepository.find();
    }

    @Query(() => PagesEntity)
    async page(@Args("id") id: string): Promise<PagesEntity> {
        return this.pagesRepository.findOneById(id);
    }
}
