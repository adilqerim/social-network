import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img src='https://images.unsplash.com/photo-1578608738964-cd27acd5af2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1291&q=80' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;