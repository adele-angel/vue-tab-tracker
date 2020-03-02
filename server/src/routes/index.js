const controllers = require("../controllers/index");

const AuthenticationControlPolicy = require("../policies/AuthenticationControllerPolicy");

module.exports = app => {
	// @route   POST /register
	// @desc    Register user
	// @access  Public
	app.post("/register", AuthenticationControlPolicy.register, controllers.AuthenticationController.register);
	// @route   POST /login
	// @desc    Login user
	// @access  Private
	app.post("/login", controllers.AuthenticationController.login);
	// @route   GET /songs
	// @desc    Display all songs
	// @access  Public
	app.get("/songs", controllers.SongsController.index);
	// @route   GET /songs/:songId
	// @desc    Display song by ID
	// @access  Public
	app.get("/songs/:songId", controllers.SongsController.showSong);
	// @route   POST /songs
	// @desc    Create song
	// @access  Public
	app.post("/songs", controllers.SongsController.createSong);
};
