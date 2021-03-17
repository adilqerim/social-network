import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
     const postsElements = props.store.getState().profilePage.posts
        .map(p => <Post message={p.text} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef();

    const addPost = () => {
        props.store.addPost()
    }

    const newPostChange = () => {
        const text = newPostElement.current.value;
        props.store.updatePostText(text)
    }

  return (
    <div className={s.postsBlock}>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={ newPostChange } value={ props.store.getState().profilePage.newPostText }/>
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