import { Injectable } from "@nestjs/common";

import { PageStatusEntity } from "@/page/entities/pageStatus.entity";
import { PrismaService } from "@/prisma/services/prisma.service";

@Injectable()
export class PageStatusService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Find all page statuses
     */
    findPageStatuses(): Promise<PageStatusEntity[]> {
        return this.prismaService.pageStatus.findMany();
    }

    /**
     * Count all page statuses
     */
    countAll(): Promise<number> {
        return this.prismaService.pageStatus.count();
    }
}
