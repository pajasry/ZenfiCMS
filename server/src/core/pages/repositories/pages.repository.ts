import {
    AbstractRepository,
    EntityRepository,
    FindManyOptions,
    FindOneOptions,
    SelectQueryBuilder,
} from "typeorm";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { PagesEntity } from "@/pages/entities/pages.entity";
import { CreatePagesRepositoryDto } from "@/pages/repositories/pages.repository-dto";

@EntityRepository(PagesEntity)
export class PagesRepository extends AbstractRepository<PagesEntity> {
    createQueryBuilder(): SelectQueryBuilder<PagesEntity> {
        return this.repository.createQueryBuilder("pages");
    }

    create(createPostRepositoryDto: Partial<CreatePagesRepositoryDto>): PagesEntity {
        return this.repository.create(createPostRepositoryDto);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
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

    async count(): Promise<number> {
        return this.repository.count();
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
