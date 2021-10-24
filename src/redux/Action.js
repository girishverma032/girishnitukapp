const axios = require('axios');
export const userPostFetch = (user) => {
    console.log('user', user);
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            // localStorage.setItem("token", data.token)
            // dispatch(loginUser(data.user))
             dispatch(apiData(response.data));
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
};

export const userLoginFetch = user => {
    // return dispatch => {
    //     return fetch("http://localhost:3000/api/v1/login", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json',
    //         },
    //         body: JSON.stringify({user})
    //     })
    //         .then(resp => resp.json())
    //         .then(data => {
    //             if (data.message) {
    //                 // Here you should have logic to handle invalid login credentials.
    //                 // This assumes your Rails API will return a JSON object with a key of
    //                 // 'message' if there is an error
    //             } else {
    //                 localStorage.setItem("token", data.token)
    //                 dispatch(loginUser(data.user))
    //             }
    //         })
    // }
}

export const getProfileFetch = () => {
    return async (dispatch)=>{
        try {
            const response = await axios.get(`https://pixabay.com/api/?key=20252303-c780749e5efd298d62eec5135&q=yellow+flowers&image_type=photo&pretty=true`);
            console.log('response', response && response.data && response.data.hits );
            // localStorage.setItem("token", data.token)
            // dispatch(loginUser(data.user))
             dispatch(apiImageData(response && response.data && response.data.hits));
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    // return dispatch => {
    //     const token = localStorage.token;
    //     if (token) {
    //         return fetch("http://localhost:3000/api/v1/profile", {
    //             method: "GET",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Accept: 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //             .then(resp => resp.json())
    //             .then(data => {
    //                 if (data.message) {
    //                     // An error will occur if the token is invalid.
    //                     // If this happens, you may want to remove the invalid token.
    //                     localStorage.removeItem("token")
    //                 } else {
    //                     dispatch(loginUser(data.user))
    //                 }
    //             })
    //     }
    // }
}

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})
export const apiData = (data) => ({
    type: 'API_DATA',
    payload: data,
})
export const apiImageData = (data) => ({
    type: 'API_IMAGE_DATA',
    payload: data,
})

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})
