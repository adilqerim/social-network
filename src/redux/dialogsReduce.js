const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {

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

