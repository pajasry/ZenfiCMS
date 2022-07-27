import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getMetadataArgsStorage } from "typeorm";
import { PublicationStatusesModule } from "@/publicationStatuses/publicationStatuses.module";
import { UsersModule } from "@/users/users.module";
import { PagesModule } from "@/pages/pages.module";
import { PostsModule } from "@/posts/posts.module";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const connection = require("../../ormconfig");

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...connection,
            keepConnectionAlive: true,
            entities: getMetadataArgsStorage().tables.map((t) => t.target),
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: "src/schema.gql",
            sortSchema: true,
            playground: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
        }),
        UsersModule,
        PublicationStatusesModule,
        PagesModule,
        PostsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
