import {
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  FETCH_BALANCE,
} from "./types";

import axios from "axios";

axios.defaults.baseURL = "https://algorandapi.herokuapp.com";

// algosdk.secretKeyToMnemonic
export const login = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOADING }); // dispatch user loading

    const response = await axios.get(`/auth/create`);

    // console.log({response})
    const { addr, mnemonic, isValid } = response.data;

    if (!isValid || !addr || !mnemonic) {
      dispatch({
        type: LOGIN_FAIL,
      });

      alert("Failed to generate address. Please try again");

      return false;
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
      type: LOGIN_FAIL,
    });
  }
};

export const recover = (mnemonic) => async (dispatch, getState) => {
  try {
    console.log({ mnemonic });

    dispatch({ type: USER_LOADING }); // dispatch user loading

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ mnemonic });

    const response = await axios.post(`/auth/recover`, body, config);

    if (response) {
      const { address, mnemonic } = response.data;

      if (!address || !mnemonic) {
        alert("Failed to recover address.");
        return false;
      }

      dispatch({
        type: LOGIN_SUCCESS,
        userAddress: address,
        mnemonic: mnemonic,
        // recentOrders
      });

      return true;
    } else {
      alert("Failed to recover address.");
      return false;
    }
  } catch (error) {
    console.log({ error });

    dispatch({
      type: LOGIN_FAIL,
    });

    alert("Failed to recover address.");
    return false;
  }
};

export const logout = () => async (dispatch, getState) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

export const fetch_balance = (mnemonic) => async (dispatch, getState) => {
  try {

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ price, mnemonic });

    const response = await axios.post(`/purchase`, body, config);

    console.log(response.data);

    dispatch({
      type: FETCH_BALANCE,
      balance: response.data,
    });
  } catch (error) {
    console.log("error from fetch balance ", { error });
  }
};
