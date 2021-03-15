const state = {
    profilePage: {
        posts: [
            {id: 1, text: 'HEY)', likesCount: 5},
            {id: 2, text: 'WHAT TIME IS IT?', likesCount: 6}
        ]
    },

    dialogsPage: {
        dialogs : [
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
        ]
    }
}

export const addPost = (postMessage) => {
    const newPost = {
        id: 5,
        text: postMessage,
        likesCount: 10
    }

    state.profilePage.posts.push(newPost)
}

export default state;