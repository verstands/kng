import { GET_ENTRE, GET_ENTRE_JOURNEE } from "../actions/EntreAction"

const initialState = {
    entreData: null,
    entreDataJournee: null
};

export default function entreReduceur(state = initialState, action) {
    switch (action.type) {
        case GET_ENTRE:
            return {
                ...state,
                entreData: action.payload
            };
        case GET_ENTRE_JOURNEE:
            return {
                ...state,
                entreDataJournee: action.payload
            };
        default:
            return state
    }
}