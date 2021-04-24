
import {
    USER_LOADING, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT_SUCCESS
 } from "../action/types"


export const loadUser = () => async (dispatch, getState) => {


    dispatch({ type: USER_LOADING }); // dispatch user loading
    let userAddress = '0000'

    dispatch({
       type: USER_LOADED,
        payload: userAddress,
        // recentOrders
      }); 

};
export const login = () => async (dispatch, getState) => {


    dispatch({ type: USER_LOADING }); // dispatch user loading
    let userAddress = '0000'
    let mnemonic = ""

    dispatch({
       type: USER_LOADED,
       userAddress: userAddress,
        mnemonic :mnemonic
        // recentOrders
      }); 

};


