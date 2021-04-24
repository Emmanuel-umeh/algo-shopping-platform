import { ORDER_FAILED, ORDER_SUCCESSFUL } from "./types";

import axios from "axios";

axios.defaults.baseURL = "https://algorandapi.herokuapp.com";

export const purchase = (price, mnemonic) => async (dispatch, getState) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ price, mnemonic });

    const response = await axios.post(`/purchase`, body, config);

    // console.log({response})
    const { success } = response.data;

    if (!success) {
      dispatch({
        type: ORDER_FAILED,
      });



      return "Failed to purchase product";
    }

    dispatch({
      type: ORDER_SUCCESSFUL,
    });

    return "Product Purchased Successfully!!";
  } catch (error) {
    console.log(error.response.data.msg);

    // alert(error.response.msg ? error.response.msg : "Something went wrong. Please try again")

    dispatch({
      type: ORDER_FAILED,
    });
    return error.response.data.msg
      ? error.response.data.msg
      : "Something went wrong. Please try again";
  }
};
