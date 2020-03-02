import API from "@/services/API";

export default {
	index() {
		return API().get("songs");
	},
	create(song) {
		return API().post("songs", song);
	}
};
