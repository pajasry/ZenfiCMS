import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getMetadataArgsStorage } from "typeorm";
import { PublicationStatusesModule } from "@/publicationStatuses/publicationStatuses.module";
import { UsersModule } from "@/users/users.module";
import { PagesModule } from "@/pages/pages.module";
import { PostsModule } from "@/posts/posts.module";
import { AuthModule } from "@/auth/auth.module";
import { SettingsModule } from "@/settings/settings.module";
import { EmailsModule } from "@/emails/emails.module";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const connection = require("../../ormconfig");

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            ...connection,
            keepConnectionAlive: true,
            entities: getMetadataArgsStorage().tables.map((t) => t.target),
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
        PublicationStatusesModule,
        PagesModule,
        PostsModule,
        AuthModule,
        UsersModule,
        EmailsModule,
        SettingsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
