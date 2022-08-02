import { Injectable } from "@nestjs/common";
import nodemailer from "nodemailer";
import { UsersEntity } from "@/users/entities/users.entity";
import {
    CreateMailOptionsServiceDto,
    SendEmailServiceDto,
} from "@/emails/services/emails.service-dto";

@Injectable()
export class EmailsService {
    private createTransport() {
        return nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "xxx@xx.com",
                pass: "xxxx",
            },
        });
    }

    private createMailOptions(createMailOptionsServiceDto: CreateMailOptionsServiceDto) {
        return {
            ...createMailOptionsServiceDto,
            from: "",
        };
    }

    async sendMail(sendEmailServiceDto: SendEmailServiceDto): Promise<boolean> {
        const transport = this.createTransport();
        const mailOptions = this.createMailOptions(sendEmailServiceDto);

        try {
            await transport.sendMail(mailOptions);
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
