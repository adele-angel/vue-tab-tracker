const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// configuration data
const config = require("./config/config");
// database, exporting the sequelize object
const { sequelize } = require("./models/index");

// middleware initialization
const app = express();
app.use(morgan("short"));
app.use(bodyParser.json());
app.use(cors());

// set up passport logic when the application loads
require("./config/passport");

// routes
require("./routes/index")(app);

/**
 * connecting (syncing) sequelize to the database
 * creating tables if they don't exist
 */

// sequelize.sync({ force: true })
// clears up the database - drops all tables
// should not be used for production environment!
sequelize.sync().then(() => {
	app.listen(config.port); // start server
	console.log(`Server started on port ${config.port}`);
});
