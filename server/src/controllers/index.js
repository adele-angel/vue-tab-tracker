/**
 * controllers
 * definition of all end points
 */

const AuthenticationController = require("../controllers/AuthenticationController");
const SongsController = require("../controllers/SongsController");
const BookmarksController = require("../controllers/BookmarksController");
const HistoryController = require("../controllers/HistoryController");

module.exports = {
	AuthenticationController,
	SongsController,
	BookmarksController,
	HistoryController
};
