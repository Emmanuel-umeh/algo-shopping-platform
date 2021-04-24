import {
    ORDER_FAILED,
    ORDER_SUCCESSFUL
  } from "./types";
  
  import axios from "axios"
  
axios.defaults.baseURL = "https://algorandapi.herokuapp.com";


  export const purchase = (price, mnemonic) => async (dispatch, getState) => {
    try {

        
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ price,mnemonic });
  
      

      
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
          
          return "Failed to purchase product"
      }
      
      dispatch({
        type: ORDER_SUCCESSFUL,

      });

      alert("Product Purchased Successfully!!")
  
  
  
    } catch (error) {
      console.log({ error });

      alert(error.response.msg ? error.response.msg : "Something went wrong. Please try again")
  
      dispatch({
          type : ORDER_FAILED
      })
      return ""
    }
  };
  
 