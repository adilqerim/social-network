import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, newPostChangeActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {
     const postsElements = props.profilePage.posts
        .map(p => <Post message={p.text} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef();

    const addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action)
    }

    const onNewPostChange = () => {
        const text = newPostElement.current.value;
     //   const text = event.target.value;
        const action = newPostChangeActionCreator(text)
        props.dispatch(action)
    }

  return (
    <div className={s.postsBlock}>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea ref={ newPostElement }
                    onChange={ onNewPostChange }
                    value={ props.profilePage.newPostText }/>
        </div>
        <button onClick={ addPost }>Add post</button>
      </div>
      <div className={s.posts}>
          { postsElements}
      </div>
    </div>
  )
}

export default MyPosts;