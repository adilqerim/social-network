import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
     const profilePage = props.profilePage

     const postsElements = profilePage.posts
        .map(p => <Post message={p.text} key={p.id} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost()
    }

    const onNewPostChange = (e) => {
         const text = e.target.value
         props.updateNewPostText(text)
    }

  return (
    <div className={s.postsBlock}>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea onChange={ onNewPostChange }
                    value={ profilePage.newPostText }/>
        </div>
        <button onClick={ onAddPost }>Add post</button>
      </div>
      <div className={s.posts}>
          { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;