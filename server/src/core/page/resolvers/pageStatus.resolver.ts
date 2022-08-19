import { Query, Resolver } from "@nestjs/graphql";

import { PageStatusesOutput } from "@/page/resolvers/pageStatus.resolver-output";
import { PageStatusService } from "@/page/services/pageStatus.service";

@Resolver()
export class PageStatusResolver {
    constructor(private readonly pageStatusService: PageStatusService) {}

    @Query(() => PageStatusesOutput)
    async pageStatuses(): Promise<PageStatusesOutput> {
        const count = await this.pageStatusService.countAll();
        const statuses = await this.pageStatusService.findPageStatuses();

        return { items: statuses, count };
    }
}
