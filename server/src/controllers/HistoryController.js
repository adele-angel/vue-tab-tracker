const _ = require("lodash");
const { Song, History } = require("../models");

module.exports = {
	async index(req, res) {
		try {
			const history = await History.findAll({
				where: {
					userId: req.query.userId
				},
				include: { model: Song, as: "song" }
			}).map(recent => ({
				id: recent.id,
				songId: recent.songId,
				userId: recent.userId,
				createdAt: recent.createdAt,
				updatedAt: recent.updatedAt,
				title: recent.song.title,
				artist: recent.song.artist,
				genre: recent.song.genre,
				album: recent.song.album,
				albumCoverURL: recent.song.albumCoverURL,
				youtubeId: recent.song.youtubeId,
				lyrics: recent.song.lyrics,
				tab: recent.song.tab
			}));

			res.status(200).json(_.uniqBy(history.reverse(), recent => recent.songId));
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to fetch latest viewed songs."
			});
		}
	},
	async createRecent(req, res) {
		try {
			const { songId, userId } = req.body;
			const recentlyViewed = await History.create({
				songId: songId,
				userId: userId
			});

			res.status(200).json(recentlyViewed);
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to create the view history."
			});
		}
	}
};
