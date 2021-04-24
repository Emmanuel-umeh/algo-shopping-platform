
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

// algosdk.secretKeyToMnemonic
export const login = () => async (dispatch, getState) => {


    dispatch({ type: USER_LOADING }); // dispatch user loading

    acct = algosdk.generateAccount();

    userAddress = acct.addr;
console.log({userAddress});
var mnemonic = algosdk.secretKeyToMnemonic(acct.sk);

// var recoveredAccount1 = algosdk.mnemonicToSecretKey(account1_mnemonic);
var isValid = algosdk.isValidAddress(recoveredAccount1.addr);
console.log("Is this a valid address: " + isValid);
console.log("Account created. Save off Mnemonic and address");

    let userAddress = '0000'
    let mnemonic = ""

    dispatch({
       type: USER_LOADED,
       userAddress: userAddress,
        mnemonic :mnemonic
        // recentOrders
      }); 

};


