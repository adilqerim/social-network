import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";
import {PostType} from "../../../Types/Types";
import {AppStateType} from "../../../redux/reduxStore";
import {connect} from "react-redux";
import {actions} from "../../../redux/profileReducer";


type MapStatePropsType = {
    posts: Array<PostType>
}
type MapDispatchPropsType = {
    addPost: (newPostBody: string) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

const MyPosts: FC<PropsType> = ({ posts, addPost}) => {

    const onAddPost = (values: any) => {
        const newPost = values.newPostBody
        addPost(newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>

            <div className={s.posts}>
                {posts.map(p => <Post text={p.text} key={p.id} likesCount={p.likesCount}/>)}
            </div>

            <AddNewPostForm onSubmit={onAddPost}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    posts: state.profilePage.posts
})

export default connect(mapStateToProps,
    {addPost: actions.addPost})(MyPosts);