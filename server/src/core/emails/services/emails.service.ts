import { Injectable } from "@nestjs/common";
import { UsersEntity } from "@/users/entities/users.entity";
import {
    CreateMailOptionsServiceDto,
    SendEmailServiceDto,
} from "@/emails/services/emails.service-dto";
import { InjectSendGrid, SendGridService } from "@ntegral/nestjs-sendgrid";

//TODO Add errors handling

@Injectable()
export class EmailsService {
    constructor(
        @InjectSendGrid()
        private readonly sendgridService: SendGridService
    ) {}

    private createMailOptions(createMailOptionsServiceDto: CreateMailOptionsServiceDto) {
        return {
            ...createMailOptionsServiceDto,
            from: process.env.SENGRID_SENDER,
        };
    }

    async sendMail(sendEmailServiceDto: SendEmailServiceDto): Promise<boolean> {
        const mailOptions = this.createMailOptions(sendEmailServiceDto);

        try {
            await this.sendgridService.send(mailOptions);
            return true;
        } catch {
            return false;
        }
    }

    async sendResetPasswordMail(user: UsersEntity): Promise<boolean> {
        const host = process.env.CLIENT;
        const token = user.passwordToken.value;

        const html = `
            <p>Odkaz na vytvoření nového hesla:</p>
            <a href="${host}/create-password?token=${token}">
                Vytvoření nového hesla
            </a>
        `;

        return this.sendMail({
            to: user.email,
            subject: "Vytvoření nového hesla",
            html,
        });
    }
}
