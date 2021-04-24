import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "./types";


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
      `/auth`
    );



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