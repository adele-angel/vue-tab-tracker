const { Bookmark } = require("../models");

module.exports = {
	async index(req, res) {
		try {
			const bookmark = await Bookmark.findOne({
				where: {
					songId: req.query.songId,
					userId: req.query.userId
				}
			});

			res.status(200).json(bookmark || {});
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to fetch the bookmark."
			});
		}
	}
};
