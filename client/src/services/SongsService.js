import API from "@/services/API";

export default {
	index() {
		return API().get("songs");
	},
	create(song) {
		return API().post("songs", song);
	},
	show(songId) {
		return API().get(`songs/${songId}`);
	},
	update(song) {
		return API().put(`songs/${song.id}`, song);
	}
};
