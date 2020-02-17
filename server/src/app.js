const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(morgan("short"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => res.send({ message: "TabTracker server" }));

app.listen(process.env.PORT || 3000);
