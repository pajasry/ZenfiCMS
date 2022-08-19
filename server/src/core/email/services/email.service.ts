import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import * as SendGrid from "@sendgrid/mail";

import { SendEmailInput } from "@/email/services/email.service-input";
import { UserEntity } from "@/user/entities/user.entity";

@Injectable()
export class EmailService {
    constructor() {
        SendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    }

    /**
     * Send email with sendgrid
     */
    async sendMail(sendEmailInput: SendEmailInput): Promise<boolean> {
        const mailOptions = {
            ...sendEmailInput,
            from: process.env.SENGRID_SENDER,
        };

        try {
            await SendGrid.send(mailOptions);
            return true;
        } catch (err) {
            throw new UnprocessableEntityException("Sendgrid config error");
        }
    }

    /**
     * Send mail with reset password link
     */
    async sendResetPasswordMail(user: UserEntity): Promise<boolean> {
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
