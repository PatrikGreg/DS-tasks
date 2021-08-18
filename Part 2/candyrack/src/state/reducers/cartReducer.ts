import Cart from "../interfaces/Cart" 
import Offer from "../interfaces/Offer";
import { Action } from "../actions"
import { ActionType } from "../action-types";


const reducer = (state: Cart, action: Action) => {
    switch (action.type){
        case ActionType.ADD:
            return state.add(action.payload);
        case ActionType.REMOVE:
            return state.remove(action.payload);
        default:
            return state;
    }
}

export default reducer;