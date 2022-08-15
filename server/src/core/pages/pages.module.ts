import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PagesResolver } from "@/pages/resolvers/pages.resolver";
import { PagesService } from "@/pages/services/pages.service";
import { PagesRepository } from "@/pages/repositories/pages.repository";
import { PublicationStatusesRepository } from "@/publicationStatuses/repositories/publicationStatuses.repository";

@Module({
    imports: [TypeOrmModule.forFeature([PagesRepository, PublicationStatusesRepository])],
    exports: [PagesResolver, PagesService],
    providers: [PagesResolver, PagesService],
})
export class PagesModule {}
