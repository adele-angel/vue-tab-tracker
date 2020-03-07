import axios from "axios";
import store from "@/store";

export default () => {
	// return connector
	return axios.create({
		baseURL: "https://vue-tab-tracker-server.herokuapp.com/", // server address
		headers: {
			Authorization: `Bearer ${store.state.token}`
		}
	});
};
