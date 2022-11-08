import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8086/interests";

const addInterests = (interesList) => {

    return axios
        .post(API_URL, interesList, { headers: authHeader() })
        .then((response) => {
            return response;
        })
};

const postService = {
    addInterests
};

export default postService;
