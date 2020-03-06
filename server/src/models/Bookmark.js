module.exports = (sequelize, DataTypes) => {
	const Bookmark = sequelize.define("Bookmark", {});

	Bookmark.associate = function(models) {
		Bookmark.belongsTo(models.User, {
			as: "user",
			constraints: false
		});
		Bookmark.belongsTo(models.Song, {
			as: "song",
			constraints: false
		});
	};

	return Bookmark;
};
