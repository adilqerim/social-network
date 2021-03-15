import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export const posts = [
    {id: 1, text: 'HEY)', likesCount: 5},
    {id: 2, text: 'WHAT TIME IS IT?', likesCount: 6}
]

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;