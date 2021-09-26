
const authState = {
    isLoggedIn: false,
    token: null,
    userInfo: null,
    err: null,
    isLoading: false
}

const authReducer = (state=authState, action) => {
    switch(action.type){
        case REQUEST_LOG_IN: 
            return {
                ...state,
                isLoading: true,
                err: null
            }
        case LOG_IN: 
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
                userInfo: action.payload.userInfo,
                isLoading: false,
                err: null 
            }
        case LOG_OUT: 
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null,
                token: null
            }
        case LOG_IN_FAILED: 
            return {
                ...state,
                userInfo: null,
                err: action.payload,
                isLoading: false,
                token: null
            }
        default: 
            return state; 
    }
}