import { BadRequestException, Injectable } from "@nestjs/common";
import {
    CreatePageInput,
    UpdatePageInput,
} from "@/pages/resolvers/pages.resolver-input";
import { UsersEntity } from "@/users/entities/users.entity";
import { PagesEntity } from "@/pages/entities/pages.entity";
import { PagesRepository } from "@/pages/repositories/pages.repository";
import { PublicationStatusesRepository } from "@/publicationStatuses/repositories/publicationStatuses.repository";
import { createPath } from "@/utils/url";

@Injectable()
export class PagesService {
    constructor(
        private readonly pagesRepository: PagesRepository,
        private readonly publicationStatusesRepository: PublicationStatusesRepository
    ) {}

    async findPage(id?: string, path?: string): Promise<PagesEntity> {
        const isFilledParams = id || path;

        if (!isFilledParams) {
            throw new BadRequestException("Chybějí parametr 'id' nebo 'path'");
        }

        return this.pagesRepository.findOne({
            where: [
                {
                    id,
                },
                {
                    path,
                },
            ],
        });
    }

    async createPage(
        user: UsersEntity,
        createPageInput: CreatePageInput
    ): Promise<PagesEntity> {
        const { name, description, statusId } = createPageInput;

        const status =
            await this.publicationStatusesRepository.findOneByIdOrFail(
                statusId
            );

        const page = this.pagesRepository.create({
            name,
            status,
            description,
            author: user,
            path: createPath(name),
        });

        return this.pagesRepository.save(page);
    }

    async updatePage(
        id: string,
        updatePageInput: UpdatePageInput
    ): Promise<PagesEntity> {
        const { name, description, statusId } = updatePageInput;

        const page = await this.pagesRepository.findOneByIdOrFail(id);

        if (description) page.description = description;

        if (name) {
            page.name = name;
            page.path = createPath(name);
        }

        if (statusId) {
            page.status =
                await this.publicationStatusesRepository.findOneByIdOrFail(
                    statusId
                );
        }

        return this.pagesRepository.save(page);
    }
}
