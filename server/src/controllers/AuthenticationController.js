const { User } = require("../models");

module.exports = {
	async register(req, res) {
		try {
			const user = await User.create({
				email: req.body.email.replace(/\s+/g, ""),
				password: req.body.password
			});
			res.status(200).json(user);
		} catch (err) {
			res.status(400).send({
				error: "This email account is already in use."
			});
		}
	}
};
