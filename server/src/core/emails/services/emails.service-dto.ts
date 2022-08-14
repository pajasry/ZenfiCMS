export interface CreateMailOptionsServiceDto {
    to: string;
    subject: string;
    html: string;
}

export type SendEmailServiceDto = CreateMailOptionsServiceDto;
