const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const cors = require("cors");
const app = express();

const { PORT, HOST } = require("./config/constantes.json");
const routes = require("./routes");

nunjucks.configure(path.resolve(__dirname, "..", "src", "screens"), {
  express: app,
  autoescape: true,
  watch: true,
});
app.use(
  "/public",
  express.static(path.resolve(__dirname, "..", "src", "public"))
);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});
