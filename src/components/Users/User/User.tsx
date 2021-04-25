import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";
import styles from "../Users.module.css";
import React from "react";
import {UserType} from "../../../Types/Types";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, followingInProgress, follow, unfollow}) => {
    const u = user
    return <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.userAvatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          unfollow(u.id)
                                      }}>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          follow(u.id)
                                      }}>Follow</button>}

                    </div>
                </span>
        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
    </div>
}

export default User