import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "./types";

import axios from "axios"


axios.defaults.baseURL = "https://algorandapi.herokuapp.com";
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING }); // dispatch user loading
  let userAddress = "0000";

  dispatch({
    type: USER_LOADED,
    payload: userAddress,
    // recentOrders
  });
};

// algosdk.secretKeyToMnemonic
export const login = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOADING }); // dispatch user loading

    
    const response = await axios.get(
      `/auth/create`
    );

    const {addr, mnemonic, isValid} = response

    if(!isValid || !addr ||!mnemonic){
        dispatch({
            type : LOGIN_FAIL
        })

        alert("Failed to generate address. Please try again")
        
        return false
    }
    
    dispatch({
      type: LOGIN_SUCCESS,
      userAddress: addr,
      mnemonic: mnemonic,
      // recentOrders
    });



  } catch (error) {
    console.log({ error });

    dispatch({
        type : LOGIN_FAIL
    })
  }
};


export const recover = (mnemonic) => async (dispatch, getState) => {
    try {

        
      dispatch({ type: USER_LOADING }); // dispatch user loading

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ mnemonic });
  
      
      const response = await axios.get(
        `/auth/recover`, body, config
      );
  
      const {address, mnemonic} = response
  
      if( !address ||!mnemonic){
  
          alert("Failed to recover address.")
          return false
      }
      
      dispatch({
        type: LOGIN_SUCCESS,
        userAddress: address,
        mnemonic: mnemonic,
        // recentOrders
      });
  
  
  
    } catch (error) {
      console.log({ error });
  
      dispatch({
          type : LOGIN_FAIL
      })
    }
  };
  


export const logout = () => async (dispatch, getState) => {

    dispatch({
        type : LOGOUT_SUCCESS
    })
}