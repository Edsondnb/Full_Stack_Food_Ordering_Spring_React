import { isPresentInFavorites } from "../../config/logic";
import {
    REGISTER_REQUEST,
    LOGIN_REQUEST,
    GET_USER_REQUEST,
    ADD_TO_FAVORITE_REQUEST,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_FAILURE,
    GET_USER_FAILURE,
    ADD_TO_FAVORITE_FAILURE,
  } from './ActionTypes';
  

const initialState = {

    user:null,
    isLoading:false,
    error:null,
    jwt:null,
    favorites:[],
    success:null
}

export const authReducer = (state=initialState,action) => {

    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
            return {...state, isLoading:true, error:null, success:null}

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state, 
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
                favorites:isPresentInFavorites(state.favorites, action.payload) ?
                state.favorites.filter((item)=> item.id !== action.payload.id)
                : [action.payload, ...state.favorites]
            }

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case ADD_TO_FAVORITE_FAILURE:
            return {
                ...state, 
                isLoading:false, 
                error:action.payload, 
                success:null}

        default:
            return state;
        


    }

}