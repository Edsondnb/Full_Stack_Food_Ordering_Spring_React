const initialState = {

    user:null,
    isLoading:false,
    error:null,
    jwt:null,
    favorites:[],
    success:null
}

const authReducer = (state=initialState,action) => {

    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
            return {...state, isLoading:true, error:null, success:null}
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state, 
                isLoading:false, 
                error:null, 
                success:"Register Success", 
                jwt:action.payload
        };

        case ADD_TO_FAVORITE_REQUEST:
            return {
                ...state,
                isLoading:false,
                error:null,
                success:is
            }


    }

}