import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const API_URL = "http://localhost:8086";

const register = (username, email, password, profilePicURL, offices, teams, roles) => {

    return axios
        .post(API_URL + "/register", {
            username,
            email,
            password,
            profilePicURL,
            offices,
            teams,
            roles,
        })
        .then((response) => {
            return response.data;
        })
};

const login = (username, password) => {
    return axios
        .post(API_URL + "/login", null, {
            params: {
                username,
                password
            }
        })
        .then((response) => {
            if (response.data.access_token && response.data.refresh_token) {
                const user = {
                    access_token: response.data.access_token,
                    refresh_token: response.data.refresh_token,
                }
                localStorage.setItem("user", JSON.stringify(user));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const authService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default authService;