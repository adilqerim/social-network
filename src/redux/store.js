const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

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
            }
        },
        _callSubscriber() {
            console.log('state changed')
        },

        getState() {
                return this._state;
            },
        subscribe(observer) {
        this._callSubscriber = observer
    },

        dispatch(action) {
            if (action.type === ADD_POST){

                const newPost = {
                    id: 5,
                    text: this._state.profilePage.newPostText,
                    likesCount: 10
                }

                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this)
            }
            else if (action.type === UPDATE_POST_TEXT) {

                this._state.profilePage.newPostText = action.newPostText

                this._callSubscriber(this)
            }
            else if (action.type === ADD_MESSAGE) {
                const newMessage = {
                    id: 6,
                    text: this._state.dialogsPage.newMessage
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessage = ''
                this._callSubscriber(this)
            }
            else if (action.type === UPDATE_MESSAGE_TEXT) {

                this._state.dialogsPage.newMessage = action.newMessage

                this._callSubscriber(this)

            }
        }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const newPostChangeActionCreator = text => ({ type: UPDATE_POST_TEXT, newPostText: text })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateMessageTextActionCreator = text => ({ type: UPDATE_MESSAGE_TEXT, newMessage: text})

export default store


