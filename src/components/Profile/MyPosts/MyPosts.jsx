import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPostForm from "./AddNewPostForm";


const MyPosts = (props) => {


    const postsElements = props.posts
        .map(p => <Post message={p.text} key={p.id} likesCount={p.likesCount}/>)

    const onAddPost = (values) => {
        const newPost = values.newPostBody
        props.addPost(newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>

            <AddNewPostForm onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;