import { LOGIN_USER } from "../actions/Login.action";

const initiatState = {}
export default function loginReduceur(state = initiatState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return [action.payload, ...state]
        default:
            return state
    }
}