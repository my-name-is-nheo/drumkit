const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});
