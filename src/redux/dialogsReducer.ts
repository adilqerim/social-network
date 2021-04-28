import {DialogType, MessageType} from "../Types/Types";
import {InferActionsTypes} from "./reduxStore";

const initialState = {
    dialogs: [
        {id: 1, name: 'Mops'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Valya'},
        {id: 4, name: 'Alla'},
        {id: 5, name: 'Dima'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hello)'},
        {id: 2, message: 'Long to no see!'},
        {id: 3, message: 'How you doing?'},
        {id: 4, message: 'Hey, I am great'},
        {id: 5, message: 'Thank you'}
    ] as Array<MessageType>,
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SN/DIALOGS/ADD_MESSAGE": {
            const message = { id: 6, message: action.newMessageBody }
            return {
                ...state,
                messages: [...state.messages, message],
            }
        }
        default:
            return state
    }

}

export const actions = {
    sendMessage: (newMessageBody: string) => ({
        type: 'SN/DIALOGS/ADD_MESSAGE',
        newMessageBody,
    })
}

export default dialogsReducer;

export type InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>
