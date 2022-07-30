import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PublicationStatusesRepository } from "@/publicationStatuses/repositories/publicationStatuses.repository";
import { PublicationStatusesResolver } from "@/publicationStatuses/resolvers/publicationStatuses.resolver";
import { PublicationStatusesService } from "@/publicationStatuses/services/publicationStatuses.service";

@Module({
    imports: [TypeOrmModule.forFeature([PublicationStatusesRepository])],
    exports: [PublicationStatusesResolver, PublicationStatusesService],
    providers: [PublicationStatusesResolver, PublicationStatusesService],
})
export class PublicationStatusesModule {}
