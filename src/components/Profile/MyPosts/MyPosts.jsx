import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

    const profilePage = props.profilePage

    const postsElements = profilePage.posts
        .map(p => <Post message={p.text} key={p.id} likesCount={p.likesCount}/>)

    const onSubmit = (values) => {
        const newPost = values.newPostBody
        props.addPost(newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>

            <AddNewPostReduxForm onSubmit={onSubmit}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newPostBody'/>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;