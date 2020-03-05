const { Op } = require("sequelize");
const { Song } = require("../models");

module.exports = {
	async index(req, res) {
		try {
			const search = req.query.search;

			if (search) {
				const songs = await Song.findAll({
					where: {
						[Op.or]: ["title", "artist", "genre", "album"].map(key => ({
							[key]: {
								[Op.like]: `%${search}%`
							}
						}))
					}
				});
				res.status(200).json(songs);
			} else {
				const songs = await Song.findAll({
					limit: 10
				});
				res.status(200).json(songs);
			}
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to fetch the songs."
			});
		}
	},
	async showSong(req, res) {
		try {
			const song = await Song.findAll({
				where: {
					id: req.params.songId
				}
			});

			res.status(200).json(song);
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to fetch the song."
			});
		}
	},
	async createSong(req, res) {
		try {
			const song = await Song.create(req.body);
			res.status(200).json(song);
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to create the song."
			});
		}
	},
	async updateSong(req, res) {
		try {
			const song = await Song.update(req.body, {
				where: {
					id: req.params.songId
				}
			});
			res.status(200).json(song);
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to update the song."
			});
		}
	}
};
