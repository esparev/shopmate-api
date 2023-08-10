import dotenv from "dotenv";

dotenv.config();

const config = {
	env: process.env.NODE_ENV || "development",
	isProd: process.env.NODE_ENV === "production",
	api: { port: process.env.PORT || 3000 },
	dbPort: process.env.DB_PORT,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbUrl: process.env.DB_URL,
	databaseUrl: process.env.DATABASE_URL,
};

export default config;
