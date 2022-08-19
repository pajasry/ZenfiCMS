import { Module } from "@nestjs/common";

import { UploadService } from "@/upload/services/upload.service";

@Module({
    providers: [UploadService],
    exports: [UploadService],
})
export class UploadModule {}
