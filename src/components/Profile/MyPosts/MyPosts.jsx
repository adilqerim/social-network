import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  const posts = [
    {id: 1, text: 'HEY)', likesCount: 5},
    {id: 2, text: 'WHAT TIME IS IT?', likesCount: 6}
]

    const postsElements = posts
        .map(p => <Post message={p.text} likesCount={p.likesCount}/>)

  return (
    <div className={s.postsBlock}>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
          { postsElements}
      </div>
    </div>
  )
}

export default MyPosts;