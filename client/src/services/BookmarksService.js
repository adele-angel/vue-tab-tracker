import API from "@/services/API";

export default {
	index(bookmark) {
		return API().get("bookmarks", {
			params: bookmark
		});
	},
	post(bookmark) {
		return API().post("bookmarks", {
			params: bookmark
		});
	},
	delete(bookmarkId) {
		return API().delete(`bookmarks/${bookmarkId}`);
	}
};
