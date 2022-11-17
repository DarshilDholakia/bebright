import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8086";

const addPost = (description, imageURL) => {

    return axios
        .post(API_URL + "/posts", {
            description,
            imageURL,
        }, 
        { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const deletePost = (postId) => {

    return axios
        .delete(API_URL + `/posts/${postId}`, null, { headers: authHeader() })
        .then(() => console.log("Successfully deleted"));
};

const updatePost = (postId, description, imageURL) => {

    return axios
        .put(API_URL + `/posts/${postId}`, {
            description,
            imageURL,
        },
        { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const getAllPosts = () => {

    return axios
        .get(API_URL + "/posts/all", { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

// const getPostById = () => {

//     return axios
//         .get(API_URL + `/posts/${postId}`)
//         .then((response) => {return response.data})
//         .catch((error) => console.error(error))
// };

const getPostsByUser = () => {

    return axios
        .get(API_URL + "/posts", { headers: authHeader() })
        .then((response) => {return response})
        .catch((error) => console.error(error))
};

const getPostsByOffice = (office) => {
    return axios
        .get(API_URL + `/posts/office/${office}`, { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const getPostsByMultipleOffices = () => {
    
    return axios
        .get(API_URL + "/posts/offices", { headers: authHeader() })
        .then((response) => {return response})
        .catch((error) => console.error(error))
};

const getPostsByOfficeAndTeam = (office, team) => {

    return axios
        .get(API_URL + `/posts/${office}/${team}`, { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const addLike = (postId) => {

    return axios
        .put(API_URL + `/posts/addLike/${postId}`, { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const removeLike = (postId) => {

    return axios
        .put(API_URL + `/posts/removeLike/${postId}`, null, { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const checkIfPostBelongsToCurrentUser = (postId) => {

    return axios
        .get(API_URL + `/posts/check/${postId}`, null, { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const postService = {
    addPost,
    deletePost,
    updatePost,
    getAllPosts,
    // getPostById,
    getPostsByUser,
    getPostsByOffice,
    getPostsByMultipleOffices,
    getPostsByOfficeAndTeam,
    addLike,
    removeLike,
    checkIfPostBelongsToCurrentUser,
};

export default postService;