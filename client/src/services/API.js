import axios from "axios";
import store from "@/store";

export default () => {
	// return connector
	return axios.create({
		baseURL: "http://localhost:3000", // server address
		headers: {
			Authorization: `Bearer ${store.state.token}`
		}
	});
};
