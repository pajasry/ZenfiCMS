import { CreateUserRepositoryDto } from "@/users/repositories/users.repository-dto";
import {
    AbstractRepository,
    EntityRepository,
    FindManyOptions,
    FindOneOptions,
    SelectQueryBuilder,
} from "typeorm";
import { UsersEntity } from "@/users/entities/users.entity";
import { BadRequestException, NotFoundException } from "@nestjs/common";

@EntityRepository(UsersEntity)
export class UsersRepository extends AbstractRepository<UsersEntity> {
    createQueryBuilder(): SelectQueryBuilder<UsersEntity> {
        return this.repository.createQueryBuilder("users");
    }

    create(createUserRepositoryDto: Partial<CreateUserRepositoryDto>): UsersEntity {
        return this.repository.create(createUserRepositoryDto);
    }

    async save(user: UsersEntity): Promise<UsersEntity> {
        try {
            return await this.repository.save(user);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async find(searchOptions?: FindManyOptions<UsersEntity>): Promise<UsersEntity[]> {
        return this.repository.find(searchOptions);
    }

    async findOneOrFail(searchOptions?: FindOneOptions<UsersEntity>): Promise<UsersEntity> {
        try {
            return await this.repository.findOneOrFail(searchOptions);
        } catch (error) {
            throw new NotFoundException("Uživatel nebyl nalezen");
        }
    }

    async findOne(searchOptions?: FindOneOptions<UsersEntity>): Promise<UsersEntity> {
        return this.repository.findOne(searchOptions);
    }

    async findOneById(id: string): Promise<UsersEntity> {
        return this.findOne({ where: { id } });
    }

    async findOneByIdOrFail(id: string): Promise<UsersEntity> {
        return this.findOneOrFail({ where: { id } });
    }

    async findOneByEmail(email: string): Promise<UsersEntity> {
        return this.findOne({ where: { email } });
    }

    async findOneByEmailOrFail(email: string): Promise<UsersEntity> {
        return this.findOneOrFail({ where: { email } });
    }
}
