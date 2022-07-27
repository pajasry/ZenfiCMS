import { Args, Query, Resolver } from "@nestjs/graphql";
import { PublicationStatusesService } from "@/publicationStatuses/services/publicationStatuses.service";
import { PublicationStatusesEntity } from "@/publicationStatuses/entities/publicationStatuses.entity";

@Resolver(() => PublicationStatusesEntity)
export class PublicationStatusesResolver {
    constructor(private readonly publicationStatusesService: PublicationStatusesService) {}

    @Query(() => [PublicationStatusesEntity])
    async publicationStatuses(): Promise<PublicationStatusesEntity[]> {
        return this.publicationStatusesService.findAll();
    }

    @Query(() => PublicationStatusesEntity)
    async publicationStatus(@Args("id") id: string): Promise<PublicationStatusesEntity> {
        return this.publicationStatusesService.findOne({ where: { id } });
    }
}
