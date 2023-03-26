const express = require('express');

const app = express();
const port = 

app.use(express.json());

app.get('/', (req, res) => {
  // Replace with pretty HTML
	res.send("ShopMate's API");
});

app.listen(port, () => {
	console.log(`Service running on http://localhost:${port}`);
});
