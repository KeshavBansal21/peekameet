const initialState = {
    user:null
}

const LoginReducer = (state=initialState , action) =>{
    switch (action.type) {
        case 'LOG_USER':
            return {...state}
    
    
        default:
            return state;
    }
}

export default LoginReducer