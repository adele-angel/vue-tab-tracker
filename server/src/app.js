const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(morgan("short"));
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) =>
	res.send({
		message: `Hello ${req.body.email}! Your user was registered!`
	})
);

app.listen(process.env.PORT || 3000);
