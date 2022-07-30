import {
    AbstractRepository,
    EntityRepository,
    FindManyOptions,
    FindOneOptions,
    SelectQueryBuilder,
} from "typeorm";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { PostsEntity } from "@/posts/entities/posts.entity";
import { CreatePostRepositoryDto } from "@/posts/repositories/posts.repository-dto";

@EntityRepository(PostsEntity)
export class PostsRepository extends AbstractRepository<PostsEntity> {
    createQueryBuilder(): SelectQueryBuilder<PostsEntity> {
        return this.repository.createQueryBuilder("posts");
    }

    create(createPostRepositoryDto: Partial<CreatePostRepositoryDto>): PostsEntity {
        return this.repository.create(createPostRepositoryDto);
    }

    async save(user: PostsEntity): Promise<PostsEntity> {
        try {
            return await this.repository.save(user);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async find(searchOptions?: FindManyOptions<PostsEntity>): Promise<PostsEntity[]> {
        return this.repository.find(searchOptions);
    }

    async findOneOrFail(searchOptions?: FindOneOptions<PostsEntity>): Promise<PostsEntity> {
        try {
            return await this.repository.findOneOrFail(searchOptions);
        } catch (error) {
            throw new NotFoundException("Příspěvek nebyl nalezen");
        }
    }

    async findOne(searchOptions?: FindOneOptions<PostsEntity>): Promise<PostsEntity> {
        return this.repository.findOne(searchOptions);
    }

    async findOneById(id: string): Promise<PostsEntity> {
        return this.findOne({ where: { id } });
    }

    async findOneByIdOrFail(id: string): Promise<PostsEntity> {
        return this.findOneOrFail({ where: { id } });
    }
}
