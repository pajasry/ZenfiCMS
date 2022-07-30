const connection = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "password",
    database: "zenficms-db",
    synchronize: false,
    entities: ["dist/**/**.entity.js"],
    migrations: ["dist/migrations/**.js"],
    cli: { migrationsDir: "src/migrations" },
};

module.exports = connection;
