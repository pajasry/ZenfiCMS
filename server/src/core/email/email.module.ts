import { Module } from "@nestjs/common";

import { EmailService } from "@/email/services/email.service";

@Module({
    imports: [],
    providers: [EmailService],
    exports: [EmailService],
})
export class EmailModule {}
