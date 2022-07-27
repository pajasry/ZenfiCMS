import { ConnectionOptions } from "typeorm";

const connection: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "password",
    database: "zenficms-db",
    synchronize: false,
    entities: ["src/**/**.entity.ts"],
    cli: { migrationsDir: "src/migrations" },
};

module.exports = connection;
