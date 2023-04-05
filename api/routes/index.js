const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerDoc = require('./swagger.json');
const authRouter = require('./auth.router');
const cartRouter = require('./cart.router');
const categoryRouter = require('./category.router');
const openingHoursRouter = require('./opening-hours.router');
const orderRouter = require('./order.router');
const paymentMethodRouter = require('./payment-method.router');
const productRouter = require('./product.router');
const shoplistRouter = require('./shoplist.router');
const storeRouter = require('./store.router');
const userRouter = require('./user.router');

function routerApi(app) {
	const router = express.Router();

	// Parent route
	app.use('/api/v1', router);
	// Children routes
	router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
	router.use('/auth', authRouter);
	router.use('/cart', cartRouter);
	router.use('/category', categoryRouter);
	router.use('/opening-hours', openingHoursRouter);
	router.use('/order', orderRouter);
	router.use('/payment-method', paymentMethodRouter);
	router.use('/product', productRouter);
	router.use('/shoplist', shoplistRouter);
	router.use('/store', storeRouter);
	router.use('/user', userRouter);
}

module.exports = routerApi;
