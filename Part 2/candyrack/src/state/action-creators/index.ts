import { ActionType } from "../action-types"
import Offer from "../interfaces/Offer"
import { Dispatch } from "redux"
import { Action } from "../actions"

export const add = (offer: Offer) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD,
            payload: offer
        })
    }
}

export const remove = (offer: Offer) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD,
            payload: offer
        })
    }
}