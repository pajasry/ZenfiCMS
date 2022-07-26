import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PagesEntity, PagesResolvers, PagesService } from "@/core/pages";

@Module({
    imports: [TypeOrmModule.forFeature([PagesEntity])],
    exports: [PagesResolvers, PagesService],
    providers: [PagesResolvers, PagesService],
})
export class PagesModule {}
