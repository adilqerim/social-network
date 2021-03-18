const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const initialState = {
    dialogs: [
        {id: 1, name: 'Mops'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Valya'},
        {id: 4, name: 'Alla'},
        {id: 5, name: 'Dima'}
    ],
    messages: [
        {id: 1, text: 'Hello)'},
        {id: 2, text: 'Long to no see!'},
        {id: 3, text: 'How you doing?'},
        {id: 4, text: 'Hey, I am great'},
        {id: 5, text: 'Thank you'}
    ],
    newMessage: 'hi from state'
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 6,
                text: state.newMessage
            }
            state.messages.push(newMessage)
            state.newMessage = ''
            return state
        case UPDATE_MESSAGE_TEXT:
            state.newMessage = action.newMessage
            return state
        default:
            return state
    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateMessageTextActionCreator = text => ({ type: UPDATE_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer;

