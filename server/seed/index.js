const { sequelize, User, Song, Bookmark, History } = require("../src/models");

const users = require("./users.json");
const songs = require("./songs.json");
const bookmarks = require("./bookmarks.json");
const history = require("./history.json");

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
	await history.map(recent => {
		History.create(recent);
	});
});
