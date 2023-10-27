const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.use(express.static("public"));
app.use(express.static("data"));
const options = {
  root: path.join(__dirname, "..", "public"),
  dotfiles: "deny",
  headers: {
    "x-timestamp": Date.now(),
    "x-sent": true,
  },
};
app.get("/", (req, res) => {
  console.log(req);
  res.sendFile("index.html", options);
});

app.get("/cars", (req, res) => {
  res.sendFile("cars.html", options);
});
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
