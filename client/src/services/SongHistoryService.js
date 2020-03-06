import API from "@/services/API";

export default {
	index(history) {
		return API().get("history", {
			params: history
		});
	},
	post(history) {
		return API().post("history", history);
	}
};
