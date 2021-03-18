import React from 'react';
import {addPostActionCreator, newPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const postTextChange = (text) => {
                    const action = newPostChangeActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts addPost={addPost}
                                updateNewPostText={postTextChange}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                />
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer