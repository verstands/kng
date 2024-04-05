import { combineReducers } from "redux";
import loginReduceur from "./LoginReducer";
import entreReduceur from "./EntreReduceur";

export default combineReducers({ 
    loginReduceur,
    entreReduceur
})