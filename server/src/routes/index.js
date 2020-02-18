const controllers = require("../controllers/index");

module.exports = app => {
	// @route   POST /register
	// @desc    Register user
	// @access  Public
	app.post("/register", controllers.AuthenticationController.register);
};
