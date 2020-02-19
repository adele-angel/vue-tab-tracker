import API from "@/services/API";

export default {
  register(credentials) {
    return API().post("register", credentials);
  }
};
