import { Sequelize, Options } from "sequelize";
import setupModels from "./models";
import config from "../../config";

const username: string = config.dbUser as string;
const password: string = config.dbPassword as string;
const database: string = config.dbName as string;

const options: Options = {
	dialect: "postgres",
	logging: config.isProd ? false : console.log,
};

if (config.isProd) {
	options.dialectOptions = {
		ssl: { rejectUnauthorized: false },
	};
}

const sequelize = new Sequelize(database, username, password, options);

setupModels(sequelize);

export default sequelize;
