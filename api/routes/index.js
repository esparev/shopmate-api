const express = require('express');

function routerApi(app) {
	const router = express.Router();

  // Parent route
	app.use('/api/v1', router);
  // Children routes
}

module.exports = routerApi;
