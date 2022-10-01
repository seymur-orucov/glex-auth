import axios from "axios";

const API_URL = "/api/v1.0.0/";

class AuthService {
  login(username, password) {
    return axios
      .post(
        API_URL + "login",
        { username, password },
        {
          headers: {
            client: window.navigator.userAgentData.platform,
          },
        }
      )
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "qeydiyyat", { username, email, password });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
