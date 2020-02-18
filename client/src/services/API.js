import axios from "axios";

export default () => {
	// return connector
	return axios.create({
		// server address
		baseURL: "http://localhost:3000"
	});
};
