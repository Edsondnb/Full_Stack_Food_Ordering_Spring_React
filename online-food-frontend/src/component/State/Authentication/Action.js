import axios from "axios";


export const registerUser=(reqData) => async (dispatch) => {
    dispatch({type: REGISTER_REQUEST});

    try{
        const {data} = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        
        if(data.jwt)localStorage.setItem("token", data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }

        dispatch({type: REGISTER_SUCCESS, payload: data.jwt});
        

    }catch(error){
        console.log("error", error)
    }
}

export const loginUser=(reqData) => async (dispatch) => {
    dispatch({type: LOGIN_REQUEST});

    try{
        const {data} = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        
        if(data.jwt)localStorage.setItem("token", data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }

        dispatch({type: LOGIN_SUCCESS, payload: data.jwt});


    }catch(error){
        console.log("error", error)
    }
}


export const getUser=(jwt) => async (dispatch) => {
    dispatch({type: GET_USER_REQUEST});

    try{
        const {data} = await api.post(`/auth/signup`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({type: GET_USER_SUCCESS, payload: data.jwt});

        console.log("user profile", data);

    }catch(error){
        console.log("error", error)
    }
}