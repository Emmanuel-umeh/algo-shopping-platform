import { combineReducers } from 'redux';


export default combineReducers({
    // error: errorReducer,
    auth: authReducer,
    campaign : campaignReducer,
    error:errorReducer,
    profile:profileReducer,
    organisation:organisationReducer,
    pay:payReducer,
    dashboard:dashboardReducer,
    feedback:feedbackReducer,
    contributors:contributorReducers,
    tx:txReducer,
    admin:adminReducer,
    flutterwave:flutterwaveReducer,
    payout:payoutReducer,
    blog:blogReducer,
    badge:badgeReducer,
    newsletter:newsletterReducer,
    userRed:userReducer,
    writer:writerReducer
    // blockchain:blockchainReducer
  });
  