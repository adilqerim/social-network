const ADD_MESSAGE = 'ADD-MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages,
                    { id: 6, text: action.newMessageBody }],
            }
        }

        default:
            return state
    }

}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer;
