import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReduce";


const store = {
        _state: {
            profilePage: {
                posts: [
                    {id: 1, text: 'HEY)', likesCount: 5},
                    {id: 2, text: 'WHAT TIME IS IT?', likesCount: 6}
                ],
                newPostText: 'Hello from BLL/state/redux'
            },
            dialogsPage: {
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
            },
            sidebar: {}
        },
        getState() {
        return this._state;
    },

        _callSubscriber() {
            console.log('state changed')
        },
        subscribe(observer) {
            this._callSubscriber = observer
        },

        dispatch(action) {
            this._state.profilePage = profileReducer(this._state.profilePage, action)
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
            this._callSubscriber(this) // перерисовка страницы
        }
}

export default store


