import {
    ORDER_FAILED,
    ORDER_SUCCESSFUL
  } from "./types";
  
  import axios from "axios"
  
axios.defaults.baseURL = "https://algorandapi.herokuapp.com";



  export const makeOrder = (name, price) => async (dispatch, getState) => {
    try {

      
      const response = await axios.post(
        `/auth/create`
      );
  
      // console.log({response})
      const {addr, mnemonic, isValid} = response.data
  
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
  
  
  axios.defaults.baseURL = "https://algorandapi.herokuapp.com";