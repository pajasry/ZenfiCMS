import { Args, Query, Resolver } from "@nestjs/graphql";
import { PublicationStatusesEntity } from "@/publicationStatuses/entities/publicationStatuses.entity";
import { PublicationStatusesRepository } from "@/publicationStatuses/repositories/publicationStatuses.repository";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@/auth/guards/auth.guard";
import {
    PublicationStatusesOutput,
    PublicationStatusOutput,
} from "@/publicationStatuses/resolvers/publicationStatuses.resolver-output";

@UseGuards(AuthGuard)
@Resolver(() => PublicationStatusesEntity)
export class PublicationStatusesResolver {
    constructor(private readonly publicationStatusesRepository: PublicationStatusesRepository) {}

    @Query(() => PublicationStatusesOutput)
    async publicationStatuses(): Promise<PublicationStatusesOutput> {
        const count = await this.publicationStatusesRepository.count();
        const statuses = await this.publicationStatusesRepository.find();

        return { count, items: statuses };
    }

    @Query(() => PublicationStatusOutput)
    async publicationStatus(@Args("id") id: string): Promise<PublicationStatusOutput> {
        const status = await this.publicationStatusesRepository.findOneById(id);

        return { item: status };
    }
}
