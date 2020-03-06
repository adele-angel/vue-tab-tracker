const bcrypt = require("bcryptjs");

async function hashPassword(user) {
	const saltRounds = 10;

	if (!user.changed("password", true)) {
		return;
	}

	const salt = await bcrypt.genSalt(saltRounds);
	user.password = await bcrypt.hash(user.password, salt);
}

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			email: {
				type: DataTypes.STRING,
				unique: true
			},
			password: DataTypes.STRING
		},
		{
			hooks: {
				beforeCreate: hashPassword
			}
		}
	);

	User.prototype.comparePasswords = function(user) {
		return bcrypt.compare(user.password, this.password);
	};

	return User;
};
