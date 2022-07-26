import { ConnectionOptions } from "typeorm";

const connection: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "password",
    database: "zenficms-db",
    synchronize: false,
    cli: { migrationsDir: "src/migrations", entitiesDir: "src/**/**.entity.ts" },
};

module.exports = connection;
