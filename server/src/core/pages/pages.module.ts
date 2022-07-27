import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PagesEntity, PagesResolver, PagesService } from "@/core/pages";

@Module({
    imports: [TypeOrmModule.forFeature([PagesEntity])],
    exports: [PagesResolver, PagesService],
    providers: [PagesResolver, PagesService],
})
export class PagesModule {}
