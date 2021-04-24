import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "./types";
import algosdk from "algosdk"

import algodclient from "../../algorand/config"

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
    console.log("creating account")

    let acct = algosdk.generateAccount();

    var userAddress = acct.addr;
    console.log({ userAddress });
    var mnemonic = algosdk.secretKeyToMnemonic(acct.sk);

    // var recoveredAccount1 = algosdk.mnemonicToSecretKey(account1_mnemonic);
    // var isValid = algosdk.isValidAddress(acct.addr);
    // console.log("Is this a valid address: " + isValid);
    // console.log("Account created. Save off Mnemonic and address");

    dispatch({
      type: LOGIN_SUCCESS,
      userAddress: userAddress,
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