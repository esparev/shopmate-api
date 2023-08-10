// Configuration file for the migration system files
import config from "../../config";

module.exports = {
	development: {
		url: config.dbUrl,
		dialect: "postgres",
	},
	production: {
		url: config.dbUrl,
		dialect: "postgres",
		dialectOptions: {
			ssl: { rejectUnauthorized: false },
		},
	},
};
