import { NestFactory } from "@nestjs/core";
import { AppModule } from "./core/app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { Logger, ValidationPipe } from "@nestjs/common";
import { TransformInterceptor } from "@/interceptors/transform.interceptor";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(new TransformInterceptor());

    app.enableCors({
        origin: process.env.CLIENT,
    });

    const port = process.env.PORT || 8000;
    await app.listen(port);

    Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}
bootstrap();
