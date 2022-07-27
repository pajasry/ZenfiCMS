import { FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "@/users/entities/users.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersEntityRepository: Repository<UsersEntity>
    ) {}

    async findAll(searchOptions?: FindManyOptions<UsersEntity>): Promise<UsersEntity[]> {
        return this.usersEntityRepository.find(searchOptions);
    }

    async findOneOrFail(searchOptions?: FindOneOptions<UsersEntity>): Promise<UsersEntity> {
        try {
            return await this.usersEntityRepository.findOneOrFail(searchOptions);
        } catch (error) {
            throw new NotFoundException("Uživatel nebyl nalezena");
        }
    }

    async findOne(searchOptions?: FindOneOptions<UsersEntity>): Promise<UsersEntity> {
        return this.usersEntityRepository.findOne(searchOptions);
    }
}
