
import {
    USER_LOADING, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT_SUCCESS
 } from "../action/types"


export const loadUser = (token) => async (dispatch, getState) => {


    dispatch({ type: USER_LOADING }); // dispatch user loading

};