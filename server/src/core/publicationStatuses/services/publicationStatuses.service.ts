import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { PublicationStatusesEntity } from "@/core/publicationStatuses";

@Injectable()
export class PublicationStatusesService {
    constructor(
        @InjectRepository(PublicationStatusesEntity)
        private readonly publicationStatusesEntityRepository: Repository<PublicationStatusesEntity>
    ) {}

    async findAll(
        searchOptions?: FindManyOptions<PublicationStatusesEntity>
    ): Promise<PublicationStatusesEntity[]> {
        return this.publicationStatusesEntityRepository.find(searchOptions);
    }

    async findOneOrFail(
        searchOptions?: FindOneOptions<PublicationStatusesEntity>
    ): Promise<PublicationStatusesEntity> {
        try {
            return await this.publicationStatusesEntityRepository.findOneOrFail(searchOptions);
        } catch (error) {
            throw new NotFoundException("Status nebyl nalezen");
        }
    }

    async findOne(
        searchOptions?: FindOneOptions<PublicationStatusesEntity>
    ): Promise<PublicationStatusesEntity> {
        return this.publicationStatusesEntityRepository.findOne(searchOptions);
    }
}
