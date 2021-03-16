import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
     const postsElements = props.posts
        .map(p => <Post message={p.text} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef();

    const addPost = () => {
        props.addPost()
    }

    const newPostChange = () => {
        const text = newPostElement.current.value;
        props.updatePostText(text)
     //   console.log(text)
    }

  return (
    <div className={s.postsBlock}>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={ newPostChange } value={ props.newPostText }/>
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