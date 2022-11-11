import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import authRefreshHeader from './auth-refresh-header'

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
            localStorage.setItem("user_object", JSON.stringify(response.data));
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

const refreshToken = (refreshToken) => {
    return axios
    .get(API_URL + "/token/refresh", { headers: authRefreshHeader() })
    .then((response) => {
        console.log(response.data)
        if (response) {
            localStorage.setItem("user", JSON.stringify(response.data))
            return localStorage.getItem("user");
        }
    })
    .catch((err) => {
        logout();
    })
}

const logout = () => {
    localStorage.removeItem("user", "user_object");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user", "user_object"));
};

const authService = {
    register,
    login,
    refreshToken,
    logout,
    getCurrentUser,
};

export default authService;