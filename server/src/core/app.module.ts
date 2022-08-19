import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import { AuthModule } from "@/auth/auth.module";
import { EmailModule } from "@/email/email.module";
import { PageModule } from "@/page/page.module";
import { PrismaModule } from "@/prisma/prisma.module";
import { UploadModule } from "@/upload/upload.module";
import { UserModule } from "@/user/user.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        GraphQLModule.forRootAsync<ApolloDriverConfig>({
            imports: [ConfigModule],
            driver: ApolloDriver,
            useFactory: () => ({
                autoSchemaFile: "src/schema.gql",
                sortSchema: true,
                playground: true,
            }),
            inject: [ConfigService],
        }),
        PrismaModule,
        PageModule,
        AuthModule,
        UserModule,
        EmailModule,
        UploadModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
