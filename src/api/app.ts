import express, { Express } from "express";
import routerApi from "./routes";

const createApp = (): Express => {
	const app: Express = express();

	app.use(express.json());

	routerApi(app);

	app.get("/", express.static("public"));

	return app;
};

export default createApp;
