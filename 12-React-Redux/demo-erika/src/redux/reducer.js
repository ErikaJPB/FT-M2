import { INCREMENT, DECREMENT, GET_USERS  } from "./actions";

const initialState = {
    contador : 0,
    users: [],
};

const reducer = (state=initialState, action) => {
    switch (action.type) {

        case INCREMENT:
            return {
                ...state, 
                contador: state.contador + 1,
            }

        case DECREMENT:
            return {
                ...state, 
                contador: state.contador - 1,
            }
        
        case GET_USERS:
            return {
                ...state,
                users: action.payload, 
            }

        default:
            return {...state}
            
    }
} 

export default reducer;