import { FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PagesEntity } from "@/pages/entities/pages.entity";

@Injectable()
export class PagesService {
    constructor(
        @InjectRepository(PagesEntity)
        private readonly pagesEntityRepository: Repository<PagesEntity>
    ) {}

    async findAll(searchOptions?: FindManyOptions<PagesEntity>): Promise<PagesEntity[]> {
        return this.pagesEntityRepository.find(searchOptions);
    }

    async findOneOrFail(searchOptions?: FindOneOptions<PagesEntity>): Promise<PagesEntity> {
        try {
            return await this.pagesEntityRepository.findOneOrFail(searchOptions);
        } catch (error) {
            throw new NotFoundException("Stránka nebyla nalezena");
        }
    }

    async findOne(searchOptions?: FindOneOptions<PagesEntity>): Promise<PagesEntity> {
        return this.pagesEntityRepository.findOne(searchOptions);
    }
}
