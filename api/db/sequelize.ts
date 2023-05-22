import { Sequelize, Options } from "sequelize";
import setupModels from "./models";
import config from "../../config";

const database: string = config.isProd
	? (config.databaseUrl as string)
	: (config.dbUrl as string);

const options: Options = {
	dialect: "postgres",
	logging: config.isProd ? false : console.log,
};

if (config.isProd) {
	options.dialectOptions = {
		ssl: { rejectUnauthorized: false },
	};
}

const sequelize = new Sequelize(database, "shopmate", undefined, options);

setupModels(sequelize);

export default sequelize;
