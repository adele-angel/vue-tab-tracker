module.exports = (sequelize, DataTypes) => {
	const History = sequelize.define("History", {});

	History.associate = function(models) {
		History.belongsTo(models.User, {
			as: "user",
			constraints: false
		});
		History.belongsTo(models.Song, {
			as: "song",
			constraints: false
		});
	};

	return History;
};
