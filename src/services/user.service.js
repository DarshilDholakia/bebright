import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8086";

const registerUser = (email, username, password, profilePicURL, offices, teams, roles) => {

    return axios
        .post(API_URL + "/register", {
            email,
            username,
            password,
            profilePicURL,
            offices,
            teams,
            roles,
        }, 
        { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const deleteUser = () => {

    return axios
        .delete(API_URL + `/users/${userId}`, null, { headers: authHeader() })
        .then(() => console.log("Successfully deleted"));
};

const updateUser = (email, username, password, profilePicURL, offices, teams, roles) => {

    return axios
        .put(API_URL + `/users/${userId}`, {
            email,
            username,
            password,
            profilePicURL,
            offices,
            teams,
            roles,
        },
        { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const getUsersByOfficeAndInterest = () => {

    return axios
        .get(API_URL + `/users/getUsersByOfficeAndInterest/${interestType}`, null, { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const getUsersOffices = () => {

    return axios
        .get(API_URL + "/users/getUsersOffices", null, { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const getUsersTeams = () => {

    return axios
        .get(API_URL + "/users/getUsersTeams", null, { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const userService = {
    registerUser,
    deleteUser,
    updateUser,
    getUsersByOfficeAndInterest,
    getUsersOffices,
    getUsersTeams,
};

export default userService;