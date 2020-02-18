const controllers = require("../controllers/index");

const AuthenticationControlPolicy = require("../policies/AuthenticationControllerPolicy");

module.exports = app => {
	// @route   POST /register
	// @desc    Register user
	// @access  Public
	app.post("/register", AuthenticationControlPolicy.register, controllers.AuthenticationController.register);
};
