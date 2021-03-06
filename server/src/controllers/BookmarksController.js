const _ = require("lodash");
const { Song, Bookmark } = require("../models");

module.exports = {
	async index(req, res) {
		try {
			const userId = req.user.id;
			const { songId } = req.query;
			const where = {
				userId: userId
			};

			if (songId) {
				where.songId = songId;
			}

			const bookmarks = await Bookmark.findAll({
				where: where,
				include: { model: Song, as: "song" }
			}).map(bookmark => ({
				id: bookmark.id,
				songId: bookmark.songId,
				userId: bookmark.userId,
				createdAt: bookmark.createdAt,
				updatedAt: bookmark.updatedAt,
				title: bookmark.song.title,
				artist: bookmark.song.artist,
				genre: bookmark.song.genre,
				album: bookmark.song.album,
				albumCoverURL: bookmark.song.albumCoverURL,
				youtubeId: bookmark.song.youtubeId,
				lyrics: bookmark.song.lyrics,
				tab: bookmark.song.tab
			}));

			res.status(200).json(bookmarks.reverse());
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to fetch bookmarks."
			});
		}
	},
	async createBookmark(req, res) {
		try {
			const userId = req.user.id;
			const { songId } = req.body.params;
			const bookmark = await Bookmark.findOne({
				where: {
					songId: songId,
					userId: userId
				}
			});

			if (bookmark) {
				res.status(400).send({
					error: "Bookmark already exists."
				});
			}

			const newBookmark = await Bookmark.create({
				songId: songId,
				userId: userId
			});

			res.status(200).json(newBookmark);
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to add the bookmark."
			});
		}
	},
	async deleteBookmark(req, res) {
		try {
			const userId = req.user.id;
			const bookmark = await Bookmark.findOne({
				where: {
					id: req.params.bookmarkId,
					userId: userId
				}
			});

			if (!bookmark) {
				res.status(403).json({
					error: "You do not have access to this bookmark"
				});
			}

			await bookmark.destroy();

			res.status(200).json(bookmark);
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to delete the bookmark."
			});
		}
	}
};
