import express, { Express, Request, Response } from "express";
import config from "../config";
import routerApi from "./routes";

const app: Express = express();
const port = config.api.port;

app.use(express.json());

routerApi(app);

app.get("/", (req: Request, res: Response) => {
	// Replace with pretty HTML
	res.send("ShopMate's API");
});

app.listen(port, () => {
	console.log(`Service running on http://localhost:${port}`);
});
