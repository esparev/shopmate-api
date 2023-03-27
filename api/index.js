const express = require('express');
const config = require('../config');
const routerApi = require('./routes');

const app = express();
const port = config.api.port;

app.use(express.json());

routerApi(app);

app.get('/', (req, res) => {
	// Replace with pretty HTML
	res.send("ShopMate's API");
});

app.listen(port, () => {
	console.log(`Service running on http://localhost:${port}`);
});
