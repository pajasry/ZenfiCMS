import {
    AbstractRepository,
    EntityRepository,
    FindManyOptions,
    FindOneOptions,
    SelectQueryBuilder,
} from "typeorm";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { SettingsEntity } from "@/settings/entities/settings.entity";
import { CreateSettingsRepositoryDto } from "@/settings/repositories/settings.repository-dto";

@EntityRepository(SettingsEntity)
export class SettingsRepository extends AbstractRepository<SettingsEntity> {
    createQueryBuilder(): SelectQueryBuilder<SettingsEntity> {
        return this.repository.createQueryBuilder("settings");
    }

    create(createSettingsRepositoryDto: Partial<CreateSettingsRepositoryDto>): SettingsEntity {
        return this.repository.create(createSettingsRepositoryDto);
    }

    async save(user: SettingsEntity): Promise<SettingsEntity> {
        try {
            return await this.repository.save(user);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async find(searchOptions?: FindManyOptions<SettingsEntity>): Promise<SettingsEntity[]> {
        return this.repository.find(searchOptions);
    }

    async findOneOrFail(searchOptions?: FindOneOptions<SettingsEntity>): Promise<SettingsEntity> {
        try {
            return await this.repository.findOneOrFail(searchOptions);
        } catch (error) {
            throw new NotFoundException("Nastavení nebylo nalezeno");
        }
    }

    async findOne(searchOptions?: FindOneOptions<SettingsEntity>): Promise<SettingsEntity> {
        return this.repository.findOne(searchOptions);
    }
}
