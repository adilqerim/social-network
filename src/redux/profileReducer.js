const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const initialState = {
    posts: [
        {id: 1, text: 'HEY)', likesCount: 5},
        {id: 2, text: 'WHAT TIME IS IT?', likesCount: 6}
    ],
    newPostText: 'Hello from BLL/state/redux'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 10
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const newPostChangeActionCreator = text => ({ type: UPDATE_POST_TEXT, newPostText: text })

export default profileReducer;

