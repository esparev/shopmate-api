import { Express } from "express";
import config from "../config";
import createApp from "./app";

const port = config.api.port;
const app: Express = createApp();

app.listen(port, () => {
	console.log(`Service running on http://localhost:${port}`);
});
