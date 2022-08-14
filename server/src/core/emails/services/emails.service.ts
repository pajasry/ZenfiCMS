import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { UsersEntity } from "@/users/entities/users.entity";
import {
    CreateMailOptionsServiceDto,
    SendEmailServiceDto,
} from "@/emails/services/emails.service-dto";
import * as SendGrid from "@sendgrid/mail";

@Injectable()
export class EmailsService {
    constructor() {
        SendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    }

    private createMailOptions(createMailOptionsServiceDto: CreateMailOptionsServiceDto) {
        return {
            ...createMailOptionsServiceDto,
            from: process.env.SENGRID_SENDER,
        };
    }

    async sendMail(sendEmailServiceDto: SendEmailServiceDto): Promise<boolean> {
        const mailOptions = this.createMailOptions(sendEmailServiceDto);

        try {
            await SendGrid.send(mailOptions);
            return true;
        } catch (err) {
            console.log(err.response.body.errors);
            throw new UnprocessableEntityException("Sendgrid config error");
        }
    }

    async sendResetPasswordMail(user: UsersEntity): Promise<boolean> {
        const host = process.env.CLIENT;
        const token = user.passwordToken.value;

        const html = `
            <p>Odkaz na vytvoření nového hesla:</p>
            <a href="${host}/admin/create-password?token=${token}">
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
