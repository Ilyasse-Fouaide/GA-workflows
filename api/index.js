const express = require("express");
const app = express();

app.get('/api', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'hello',
  });
});

app.listen(16511, () => console.log("listening..."));
