import express, { Express } from "express";
// const swaggerUi = require("swagger-ui-express");
// import swaggerUi from "swagger-ui-express";

// const swaggerDoc = require("./swagger.json");
// import swaggerDoc from "./swagger.json";
import authRouter from "./auth.router";
import cartRouter from "./cart.router";
import categoryRouter from "./category.router";
import openingHoursRouter from "./opening-hours.router";
import orderRouter from "./order.router";
import paymentMethodRouter from "./payment-method.router";
import productRouter from "./product.router";
import shoplistRouter from "./shoplist.router";
import storeRouter from "./store.router";
import userRouter from "./user.router";

function routerApi(app: Express) {
	const router = express.Router();

	// Parent route
	app.use("/api/v1", router);
	// Children routes
	// router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
	router.use("/auth", authRouter);
	router.use("/cart", cartRouter);
	router.use("/category", categoryRouter);
	router.use("/opening-hours", openingHoursRouter);
	router.use("/order", orderRouter);
	router.use("/payment-method", paymentMethodRouter);
	router.use("/product", productRouter);
	router.use("/shoplist", shoplistRouter);
	router.use("/store", storeRouter);
	router.use("/user", userRouter);
}

export default routerApi;
