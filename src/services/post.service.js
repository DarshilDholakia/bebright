import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const API_URL = "http://localhost:8086";

const addPost = (description, imageURL) => {

    return axios
        .post(API_URL + "/posts", {
            description,
            imageURL,
        })
        .then((response) => {
            return response.data;
        })
};

const deletePost = () => {

    return axios
        .delete(API_URL + `/posts/${postId}`, {
        })
        .then((response) => {
            return response.data;
        })
};

const updatePost = (description, imageURL) => {

    return axios
        .put(API_URL + `/posts/${postId}`, {
            description,
            imageURL,
        })
        .then((response) => {
            return response.data;
        })
};

const postService = {
    addPost,
    deletePost,
    updatePost,
};

export default postService;