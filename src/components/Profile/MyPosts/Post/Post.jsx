import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://w7.pngwing.com/pngs/39/283/png-transparent-user-user-people-linear-icon-user-infographic-people-monochrome-thumbnail.png' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;