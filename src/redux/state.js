let getRerender = () => {

}

const state = {
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
}

export const addPost = () => {
    const newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likesCount: 10
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    getRerender(state)
}

export const updatePostText = (newPostText) => {

    state.profilePage.newPostText = newPostText

    getRerender(state)
}

export const addMessage = () => {
    const newMessage = {
        id: 6,
        text: state.dialogsPage.newMessage
    }

    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessage = ''
    getRerender(state)
}

export const updateMessageText = (newMessageText) => {

    state.dialogsPage.newMessage = newMessageText

    getRerender(state)
}

export const subscribe = (observer) => {
    getRerender = observer
}

export default state


