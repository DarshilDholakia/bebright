import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8086";

const addComment = (postId, commentText) => {

    return axios
        .post(API_URL + "/comments", {
            postId,
            commentText,
        }, 
        { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

const deleteComment = (commentId) => {

    return axios
        .delete(API_URL + `/comments/${commentId}`, null, { headers: authHeader() })
        .then(() => console.log("Successfully deleted"));
};

const updateComment = (commentText, commentId) => {

    return axios
        .put(API_URL + `/comments/${commentId}`, {
            commentText,
        },
        { headers: authHeader() })
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
};

// const getAllComments = () => {

//     return axios
//         .get(API_URL + "/comments/all", null, { headers: authHeader() })
//         .then((response) => {return response.data})
//         .catch((error) => console.error(error))
// }

// const getCommentById = () => {

//     return axios
//         .get(API_URL + `/comments/${commentId}`, null, { headers: authHeader() })
//         .then((response) => {return response.data})
//         .catch((error) => console.error(error))
// }

// const getCommentByPostId = () => {

//     return axios
//         .get(API_URL + `/comments/post/${postId}`, null, { headers: authHeader() })
//         .then((response) => {return response.data})
//         .catch((error) => console.error(error))
// }

const commentService = {
    addComment,
    deleteComment,
    updateComment,
    // getAllComments,
    // getCommentById,
    // getCommentByPostId,
};

export default commentService;