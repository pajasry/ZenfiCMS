import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getMetadataArgsStorage } from "typeorm";
import { PagesModule } from "@/core/pages";
import { join } from "path";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const connection = require("../../ormconfig");

console.log(process.cwd());

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...connection,
            keepConnectionAlive: true,
            entities: getMetadataArgsStorage().tables.map((t) => t.target),
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            sortSchema: true,
            playground: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
        }),
        PagesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
