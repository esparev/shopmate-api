const config = {
	env: process.env.NODE_ENV || "development",
	isProd: process.env.NODE_ENV === "production",
	api: { port: process.env.PORT || 3000 },
	databaseUrl: process.env.DATABASE_URL,
	dbUrl: process.env.DB_URL,
};

export default config;
