import axios from "axios";

export default () => {
	// return connector
	return axios.create({
		baseURL: "http://localhost:3000"
	});
};
