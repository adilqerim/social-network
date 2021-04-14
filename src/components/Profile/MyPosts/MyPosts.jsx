import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Element  from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {

    const profilePage = props.profilePage

    const postsElements = profilePage.posts
        .map(p => <Post message={p.text} key={p.id} likesCount={p.likesCount}/>)

    const onAddPost = (values) => {
        const newPost = values.newPostBody
        props.addPost(newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>

            <AddNewPostReduxForm onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const Textarea = Element("textarea");


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name='newPostBody'
                   placeholder={'post message'}
                   validate={[required, maxLength10]}/>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;