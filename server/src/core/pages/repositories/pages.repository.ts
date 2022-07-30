import {
    AbstractRepository,
    EntityRepository,
    FindManyOptions,
    FindOneOptions,
    SelectQueryBuilder,
} from "typeorm";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { CreatePostRepositoryDto } from "@/posts/repositories/posts.repository-dto";
import { PagesEntity } from "@/pages/entities/pages.entity";

@EntityRepository(PagesEntity)
export class PagesRepository extends AbstractRepository<PagesEntity> {
    createQueryBuilder(): SelectQueryBuilder<PagesEntity> {
        return this.repository.createQueryBuilder("pages");
    }

    create(createPostRepositoryDto: Partial<CreatePostRepositoryDto>): PagesEntity {
        return this.repository.create(createPostRepositoryDto);
    }

    async save(user: PagesEntity): Promise<PagesEntity> {
        try {
            return await this.repository.save(user);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async find(searchOptions?: FindManyOptions<PagesEntity>): Promise<PagesEntity[]> {
        return this.repository.find(searchOptions);
    }

    async findOneOrFail(searchOptions?: FindOneOptions<PagesEntity>): Promise<PagesEntity> {
        try {
            return await this.repository.findOneOrFail(searchOptions);
        } catch (error) {
            throw new NotFoundException("Stránka nebyla nalezena");
        }
    }

    async findOne(searchOptions?: FindOneOptions<PagesEntity>): Promise<PagesEntity> {
        return this.repository.findOne(searchOptions);
    }

    async findOneById(id: string): Promise<PagesEntity> {
        return this.findOne({ where: { id } });
    }

    async findOneByIdOrFail(id: string): Promise<PagesEntity> {
        return this.findOneOrFail({ where: { id } });
    }
}
