import { ConnectionOptions } from "typeorm";

const connection: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "password",
    database: "zenficms-db",
    synchronize: false,
    entities: ["dist/src/**/**.entity.js"],
    migrations: ["dist/src/migrations/**.js"],
    cli: { migrationsDir: "src/migrations" },
};

module.exports = connection;
