import {
    USER_LOADING, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT_SUCCESS
 } from "../action/types"
 import axios from "axios"

 const initialState ={
     userAddress:null,
     isAuthenticated:false,
     isLoading:false,
     type:''
 }



 export default function(state =initialState, action){
    
    switch (action.type) {

        
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true, 
                isLoading:false,
                userAddress:action.payload,
                type:action.type
            }


                
        case USER_LOADING:
            return {
                ...state, 
                isLoading:true,
                type:action.type
            };

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
          
            return{
                ...state,
                isAuthenticated:true, 
                isLoading:false,
                userAddress:action.payload,
                type:action.payload
            }


        
        case REGISTER_FAIL:
           case AUTH_ERROR : 
            case LOGOUT_SUCCESS :
                case LOGIN_FAIL : 
          
            return{
                state
            }
        
   



                
        default:
            return state;
    }
 }
//  {

//     id: 
//     "5e8af6ffacf76a00175c3228", 
//     username: "goodness account", 
//     email: "python@gmail.com", date: "2020-04-06T09:31:43.999Z"}
//  }

// user.username 
// user.email 