const express = require("express");
const bodyParser = require("body-parser");

const actressRoute = require("./routes/actress");
const codeRoute = require('./routes/code');

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/", actressRoute);
app.use("/api", codeRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
