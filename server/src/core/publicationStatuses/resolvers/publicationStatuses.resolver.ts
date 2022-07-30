import { Args, Query, Resolver } from "@nestjs/graphql";
import { PublicationStatusesEntity } from "@/publicationStatuses/entities/publicationStatuses.entity";
import { PublicationStatusesRepository } from "@/publicationStatuses/repositories/publicationStatuses.repository";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@/auth/guards/auth.guard";

@UseGuards(AuthGuard)
@Resolver(() => PublicationStatusesEntity)
export class PublicationStatusesResolver {
    constructor(private readonly publicationStatusesRepository: PublicationStatusesRepository) {}

    @Query(() => [PublicationStatusesEntity])
    async publicationStatuses(): Promise<PublicationStatusesEntity[]> {
        return this.publicationStatusesRepository.find();
    }

    @Query(() => PublicationStatusesEntity)
    async publicationStatus(@Args("id") id: string): Promise<PublicationStatusesEntity> {
        return this.publicationStatusesRepository.findOneById(id);
    }
}
