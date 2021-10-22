import axios from 'axios';
const URL = "http://localhost:8000"
export const createpost = async (post) => {

    try {
        return await axios.post(`${URL}/create`, post, { withCredentials: true });
    } catch (error) {
        console.log("Error while calling createpost API", error)
    }
}

export const gatallpost = async (param) => {
    try {
        let response = await axios.get(`${URL}/posts${param}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling gatallpost API ', error)
    }
}

export const getpost = async (id) => {
    try {
        let response = await axios.get(`${URL}/post/${id}`, { withCredentials: true });
        // console.log('token is genatrated as ', document.cookies);
        return response.data;
    } catch (error) {
        console.log('Error while calling getpost API ', error)
    }
}

export const updatepost = async (id, post) => {
    try {
        await axios.post(`${URL}/update/${id}`, post, { withCredentials: true });

    } catch (error) {
        console.log("Error while calling updatepost API", error);
    }
}


export const deletepost = async (id) => {
    try {
        await axios.delete(`${URL}/delete/${id}`, { withCredentials: true });
    } catch (error) {
        console.log("Error while calling updatepost API", error);
    }
}

export const uploadfile = async (data) => {
    try {
        return await axios.post(`${URL}/file/upload`, data)
    } catch (error) {
        console.log("Error while uploading the image", error)
    }
}

export const newcomment = async (data) => {
    try {
        return await axios.post(`${URL}/comment/new`, data, { withCredentials: true });
        // return axios.post(`${URL}/comment/new`, data);
    } catch (error) {
        console.log("Error while calling newcomment API", error)
    }
}

export const getcomments = async (id) => {
    try {
        let response = await axios.get(`${URL}/comment/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getcomment API", error)
    }
}

export const deletecomment = async (id) => {
    try {
        return await axios.delete(`${URL}/comment/delete/${id}`);
    } catch (error) {
        console.log("Error while calling deletecomment API", error)
    }
}

export const saveprofile = async (profile) => {
    try {
        return await axios.post(`${URL}/profile`, profile);
    } catch (error) {
        console.log("Error while calling saveprofile API", error);
    }
}

export const loginprofile = async (email) => {
    try {

        let response = await axios.get(`${URL}/login/${email}`, { withCredentials: true });
        // const token = await response.generateAuthToken();
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error while calling loginprofile API", error);
    }
}

export const getprofile = async (param) => {
    try {
        let response = await axios.get(`${URL}/userprofile${param}`, { withCredentials: true });
        // console.log(response.status);
        return response;
    } catch (error) {
        console.log('Error while calling getprofile API ', error)
    }
}

export const getuseremail = async (param) => {
    try {
        let response = await axios.get(`${URL}/getuseremail${param}`, { withCredentials: true });
        return response.data.email;
    } catch (error) {
        console.log("Error  while  calling getprofile API", error)
    }
}

export const userpost = async () => {
    try {
        let response = await axios.get(`${URL}/userpost`, { withCredentials: true });
        return response;
    } catch (error) {
        console.log("Error while  calling userpost API", error)
    }
}


export const logout = async () => {
    try {
        return await axios.get(`${URL}/logout`, { withCredentials: true });
    } catch (error) {
        console.log("Error while calling  logout API", error)
    }
}