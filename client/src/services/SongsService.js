import API from "@/services/API";

export default {
	index(search) {
		return API().get("songs", {
			params: {
				search: search
			}
		});
	},
	show(songId) {
		return API().get(`songs/${songId}`);
	},
	create(song) {
		return API().post("songs", song);
	},
	update(song) {
		return API().put(`songs/${song.id}`, song);
	}
};
