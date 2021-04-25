import {DialogType, MessageType} from "../Types/Types";

const ADD_MESSAGE = 'ADD-MESSAGE'



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

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE: {
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

type ActionsType = SendMessageActionCreatorType

type SendMessageActionCreatorType = {
    type: typeof ADD_MESSAGE
    newMessageBody: string
}

export const sendMessage = (newMessageBody: string): SendMessageActionCreatorType => ({
    type: ADD_MESSAGE,
    newMessageBody,
})

export default dialogsReducer;

