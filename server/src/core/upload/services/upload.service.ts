import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { S3 } from "aws-sdk";
import { FileUpload } from "graphql-upload";

@Injectable()
export class UploadService {
    private s3 = new S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        endpoint: process.env.AWS_ENDPOINT,
    });

    async uploadFile(
        fileUpload: FileUpload
    ): Promise<S3.ManagedUpload.SendData> {
        const { createReadStream, filename } = fileUpload;

        const stream = createReadStream();

        try {
            return await this.s3
                .upload({
                    Body: stream,
                    Key: filename,
                    Bucket: process.env.AWS_BUCKET_NAME,
                })
                .promise();
        } catch (error) {
            throw new UnprocessableEntityException(error);
        }
    }
}
