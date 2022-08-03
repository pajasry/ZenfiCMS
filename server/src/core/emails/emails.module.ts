import { Module } from "@nestjs/common";
import { EmailsService } from "@/emails/services/emails.service";
import { SendGridModule } from "@ntegral/nestjs-sendgrid";

@Module({
    imports: [
        SendGridModule.forRoot({
            apiKey: process.env.SENDGRID_API_KEY,
        }),
    ],
    providers: [EmailsService],
    exports: [EmailsService],
})
export class EmailsModule {}
