import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { graphqlUploadExpress } from "graphql-upload";

import { AppModule } from "./core/app.module";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    app.enableCors({
        origin: process.env.CLIENT,
    });

    app.use(graphqlUploadExpress({ maxFiles: 10, maxFileSize: 5000000 }));

    const port = process.env.PORT || 8000;
    await app.listen(port);

    Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
