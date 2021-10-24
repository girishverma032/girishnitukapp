const initialState = {
    currentUser: {},
    apiData:[],
    apiImageData:[],
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload}
        case 'LOGOUT_USER':
            return {...state, currentUser: {} }
        case 'API_DATA':
            return {...state, apiData: action.payload }
        case 'API_IMAGE_DATA':
            return {...state, apiImageData: action.payload }

        default:
            return state;
    }
}
