const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config");

const db = {};

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, config.db.options);
/**
 * automatically reads through all the models in the models folder
 * and set them up to be used by sequelize
 *
 * @param {string} __dirname - current directory
 * @param {blob} file - single file from directory's array of files
 */
fs.readdirSync(__dirname)
	.filter(file => file !== "index.js")
	.forEach(file => {
		// declaring a model for each file
		const model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

/**
 * declaring variables onto the db object
 * in order to gets access to the sequelize object and the models
 * in other parts of the code
 */
db.sequelize = sequelize;

module.exports = db;
