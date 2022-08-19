import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import * as _ from "lodash";

import { RelationsToOtherPagesException } from "@/exceptions";
import { PageEntity } from "@/page/entities/page.entity";
import { PagesArgs } from "@/page/resolvers/page.resolver-args";
import {
    CreatePageInput,
    UpdatePageInput,
} from "@/page/resolvers/page.resolver-input";
import { PrismaService } from "@/prisma/services/prisma.service";
import { UserEntity } from "@/user/entities/user.entity";
import { formatPath } from "@/utils";

@Injectable()
export class PageService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Create page
     */
    createPage(
        user: UserEntity,
        createPageInput: CreatePageInput
    ): Promise<PageEntity> {
        const { name, description, statusId, path, subpagesIds } =
            createPageInput;

        return this.prismaService.page.create({
            data: {
                name,
                description,
                isHomepage: false,
                path: formatPath(path || name),
                status: {
                    connect: {
                        id: statusId,
                    },
                },
                author: {
                    connect: {
                        id: user.id,
                    },
                },
                subpages: {
                    connect: _.map(subpagesIds, (id) => ({ id })),
                },
            },
            include: {
                status: true,
                author: true,
            },
        });
    }

    /**
     * Update page
     */
    updatePage(
        id: string,
        updatePageInput: UpdatePageInput
    ): Promise<PageEntity> {
        const { name, description, statusId, path, subpagesIds } =
            updatePageInput;

        return this.prismaService.page.update({
            where: { id },
            data: {
                name,
                description,
                path: formatPath(path || name),
                status: {
                    connect: {
                        id: statusId,
                    },
                },
                subpages: {
                    set: _.map(subpagesIds, (id) => ({ id })),
                },
            },
            include: {
                status: true,
                author: true,
            },
        });
    }

    /**
     * Find all pages
     */
    findPages(pagesArgs: PagesArgs): Promise<PageEntity[]> {
        const { parentId, isHomepage, take, skip, except, hasSubpages } =
            pagesArgs;

        const where: Prisma.PageWhereInput = {
            isHomepage,
            parentId,
        };

        if (except) {
            where.id = {
                not: {
                    equals: except,
                },
            };
        }

        if (_.isBoolean(hasSubpages)) {
            if (hasSubpages) {
                where.subpages = {
                    some: {},
                };
            } else {
                where.subpages = {
                    none: {},
                };
            }
        }

        return this.prismaService.page.findMany({
            take,
            skip,
            where,
            include: {
                status: true,
                author: true,
                subpages: true,
            },
        });
    }

    /**
     * Find page by id
     */
    findPage(id: string): Promise<PageEntity> {
        return this.prismaService.page.findUnique({
            where: {
                id,
            },
            include: {
                status: true,
                author: true,
                subpages: true,
            },
        });
    }

    /**
     * Find client page by path
     */
    findClientPage(path: string): Promise<PageEntity> {
        return this.prismaService.page.findUnique({
            where: {
                path,
            },
            include: {
                status: true,
                author: true,
            },
        });
    }

    /**
     * Delete page by id
     */
    deletePage(id: string): Promise<PageEntity> {
        return this.prismaService.page.delete({
            where: {
                id,
            },
            include: {
                status: true,
                author: true,
            },
        });
    }

    /**
     * Count all pages
     */
    countAll(): Promise<number> {
        return this.prismaService.page.count();
    }

    /**
     * Set homepage by id
     */
    async setHomepage(id: string): Promise<boolean> {
        const page = await this.prismaService.page.findUniqueOrThrow({
            where: { id },
            include: {
                subpages: true,
            },
        });

        if (!!page.id || _.size(page.subpages) > 0) {
            throw new RelationsToOtherPagesException();
        }

        const oldHomepage = await this.prismaService.page.findFirst({
            where: {
                isHomepage: true,
            },
        });

        if (oldHomepage) {
            await this.prismaService.page.update({
                where: {
                    id: oldHomepage.id,
                },
                data: {
                    isHomepage: false,
                },
            });
        }

        await this.prismaService.page.update({
            where: {
                id: page.id,
            },
            data: {
                isHomepage: true,
            },
        });

        return true;
    }
}
