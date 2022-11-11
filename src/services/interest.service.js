import axios from "axios";
import authHeader from "./auth-header";
import authService from "./auth.service";

const API_URL = "http://localhost:8086/interests";

const getUsersInterests = () => {
    return axios
    .get(API_URL, { headers: authHeader() })
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log("the error message is printed below:")
        console.error(error)
        // const tokens = JSON.parse(localStorage.getItem("user"))
        // console.log(tokens)
        // console.log(tokens.refresh_token)
        // authService.refreshToken(tokens.refresh_token)
        // .then((response) => {
        //     if (response.data) {
        //         localStorage.setItem("user", JSON.stringify(response.data)) 
        //     }
        // })
    })
}

const addInterests = (interesList) => {

    return axios
        .post(API_URL, interesList, { headers: authHeader() })
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log(err)
        })
};

const interestService = {
    getUsersInterests,
    addInterests
};

export default interestService;
