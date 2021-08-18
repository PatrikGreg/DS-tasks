import Offer from "../interfaces/Offer"
import { ActionType } from "../action-types/index"

interface AddAction {
    type: ActionType.ADD;
    payload: Offer;
}

interface RemoveAction {
    type: ActionType.REMOVE;
    payload: Offer;
}

export type Action = AddAction | RemoveAction;