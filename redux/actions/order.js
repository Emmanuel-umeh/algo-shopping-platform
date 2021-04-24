import {
    ORDER_FAILED,
    ORDER_SUCCESSFUL
  } from "./types";
  
  import axios from "axios"
  
axios.defaults.baseURL = "https://algorandapi.herokuapp.com";



  export const purchase = (name, price) => async (dispatch, getState) => {
    try {

        
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ name,price });
  
      

      
      const response = await axios.post(
        `/auth/purchase`,  body,config
      );
  
      // console.log({response})
      const {success} = response.data
  
      if(!success){
          dispatch({
              type : ORDER_FAILED
          })
  
          alert("Failed to purchase product")
          
          return false
      }
      
      dispatch({
        type: ORDER_SUCCESSFUL,
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