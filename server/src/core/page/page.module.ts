import { Module } from "@nestjs/common";

import { PageResolver } from "@/page/resolvers/page.resolver";
import { PageStatusResolver } from "@/page/resolvers/pageStatus.resolver";
import { PageService } from "@/page/services/page.service";
import { PageStatusService } from "@/page/services/pageStatus.service";
import { UploadModule } from "@/upload/upload.module";

@Module({
    imports: [UploadModule],
    exports: [PageResolver, PageStatusResolver, PageService, PageStatusService],
    providers: [
        PageResolver,
        PageStatusResolver,
        PageService,
        PageStatusService,
    ],
})
export class PageModule {}
