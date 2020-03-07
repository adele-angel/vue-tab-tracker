const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: "7d"
	});
}

module.exports = {
	async register(req, res) {
		try {
			const user = await User.create({
				email: req.body.email.replace(/\s+/g, ""),
				password: req.body.password
			});

			res.status(200).json({
				user,
				token: jwtSignUser({
					id: user.id,
					email: user.email,
					password: user.password
				})
			});
		} catch (err) {
			res.status(400).send({
				error: "This e-mail account is already in use."
			});
		}
	},
	async login(req, res) {
		try {
			const user = await User.findOne({
				where: {
					email: req.body.email
				}
			});

			if (!user) {
				return res.status(403).send({
					error: "E-mail account was not found."
				});
			}

			const isValidPassword = user.comparePasswords(req.body);

			if (!isValidPassword) {
				return res.status(403).send({
					error: "Password does not match username."
				});
			}

			res.status(200).json({
				user,
				token: jwtSignUser({
					id: user.id,
					email: user.email,
					password: user.password
				})
			});
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to login."
			});
		}
	}
};
