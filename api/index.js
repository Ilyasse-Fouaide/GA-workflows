const express = require("express");
const app = express();

app.get('/api', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'hello',
  });
});

app.get('/api/v1/product', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'list of all product',
  });
});

app.listen(16511, () => console.log("listening..."));
