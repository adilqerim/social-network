import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  const postsData = [
    {id: 1, text: 'HEY)', likesCount: 5},
    {id: 2, text: 'WHAT TIME IS IT?', likesCount: 6}
]

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
        <Post message={postsData[0].text} likesCount={postsData[0].likesCount}/>
        <Post message={postsData[1].text} likesCount={postsData[1].likesCount}/>
      </div>
    </div>
  )
}

export default MyPosts;