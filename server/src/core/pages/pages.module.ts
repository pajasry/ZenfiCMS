import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PagesResolver } from "@/pages/resolvers/pages.resolver";
import { PagesService } from "@/pages/services/pages.service";
import { PagesEntity } from "@/pages/entities/pages.entity";

@Module({
    imports: [TypeOrmModule.forFeature([PagesEntity])],
    exports: [PagesResolver, PagesService],
    providers: [PagesResolver, PagesService],
})
export class PagesModule {}
