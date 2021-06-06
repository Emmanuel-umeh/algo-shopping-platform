import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  FETCH_BALANCE,
} from "../actions/types";

const initialState = {
  userAddress: null,
  mnemonic: null,
  balance: 0,
  isAuthenticated: false,
  isLoading: false,
  type: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        userAddress: action.userAddress,
        mnemonic: action.mnemonic,
        type: action.type,
      };

    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
        type: action.type,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        userAddress: action.userAddress,
        mnemonic: action.mnemonic,
        type: action.type,
      };

    case FETCH_BALANCE:
      return {
        ...state,
        balance: action.balance,
        type: action.type,
      };

    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
    case LOGIN_FAIL:
      return {
        userAddress: null,
        mnemonic: null,
        isAuthenticated: false,
        isLoading: false,
        type: action.type,
      };

    default:
      return state;
  }
}
