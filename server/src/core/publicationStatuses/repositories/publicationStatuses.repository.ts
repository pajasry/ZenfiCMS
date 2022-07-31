import {
    AbstractRepository,
    EntityRepository,
    FindManyOptions,
    FindOneOptions,
    SelectQueryBuilder,
} from "typeorm";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { PublicationStatusesEntity } from "@/publicationStatuses/entities/publicationStatuses.entity";
import { CreatePublicationStatusRepositoryDto } from "@/publicationStatuses/repositories/publicationStatuses.repository-dto";

@EntityRepository(PublicationStatusesEntity)
export class PublicationStatusesRepository extends AbstractRepository<PublicationStatusesEntity> {
    createQueryBuilder(): SelectQueryBuilder<PublicationStatusesEntity> {
        return this.repository.createQueryBuilder("publicationStatuses");
    }

    create(
        createPublicationStatusRepositoryDto: Partial<CreatePublicationStatusRepositoryDto>
    ): PublicationStatusesEntity {
        return this.repository.create(createPublicationStatusRepositoryDto);
    }

    async save(user: PublicationStatusesEntity): Promise<PublicationStatusesEntity> {
        try {
            return await this.repository.save(user);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async find(
        searchOptions?: FindManyOptions<PublicationStatusesEntity>
    ): Promise<PublicationStatusesEntity[]> {
        return this.repository.find(searchOptions);
    }

    async findOneOrFail(
        searchOptions?: FindOneOptions<PublicationStatusesEntity>
    ): Promise<PublicationStatusesEntity> {
        try {
            return await this.repository.findOneOrFail(searchOptions);
        } catch (error) {
            throw new NotFoundException("Status nebyl nalezen");
        }
    }

    async findOne(
        searchOptions?: FindOneOptions<PublicationStatusesEntity>
    ): Promise<PublicationStatusesEntity> {
        return this.repository.findOne(searchOptions);
    }

    async findOneById(id: string): Promise<PublicationStatusesEntity> {
        return this.findOne({ where: { id } });
    }

    async findOneByIdOrFail(id: string): Promise<PublicationStatusesEntity> {
        return this.findOneOrFail({ where: { id } });
    }

    async findOneByName(name: string): Promise<PublicationStatusesEntity> {
        return this.findOne({ where: { name } });
    }

    async findOneByNameOrFail(name: string): Promise<PublicationStatusesEntity> {
        return this.findOneOrFail({ where: { name } });
    }
}
