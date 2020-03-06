const { sequelize, Song, Bookmark, User } = require("../src/models");

const users = require("./users.json");
const songs = require("./songs.json");
const bookmarks = require("./bookmarks.json");

sequelize.sync({ force: true }).then(async function() {
	await users.map(user => {
		User.create(user);
	});
	await songs.map(song => {
		Song.create(song);
	});
	await bookmarks.map(bookmark => {
		Bookmark.create(bookmark);
	});
});
