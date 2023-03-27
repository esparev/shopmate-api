const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

function routerApi(app) {
	const router = express.Router();

	// Parent route
	app.use('/api/v1', router);
	// Children routes
	router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}

module.exports = routerApi;
