import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { PostsEntity } from "@/core/posts";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostsEntity)
        private readonly postsEntityRepository: Repository<PostsEntity>
    ) {}

    async findAll(searchOptions?: FindManyOptions<PostsEntity>): Promise<PostsEntity[]> {
        return this.postsEntityRepository.find(searchOptions);
    }

    async findOneOrFail(searchOptions?: FindOneOptions<PostsEntity>): Promise<PostsEntity> {
        try {
            return await this.postsEntityRepository.findOneOrFail(searchOptions);
        } catch (error) {
            throw new NotFoundException("Příspěvek nebyl nalezen");
        }
    }

    async findOne(searchOptions?: FindOneOptions<PostsEntity>): Promise<PostsEntity> {
        return this.postsEntityRepository.findOne(searchOptions);
    }
}
