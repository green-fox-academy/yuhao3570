const express = require('express');
const routes = require('./routes');

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, (req, res) => {
  console.log(`Server is running at ${PORT}`);
});