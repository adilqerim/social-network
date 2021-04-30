import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";
import styles from "../Users.module.css";
import React from "react";
import {UserType} from "../../../Types/Types";
import {useDispatch, useSelector} from "react-redux";
import {getFollowingInProgress} from "../../../redux/usersSelectors";
import {follow, unfollow} from "../../../redux/usersReducer";

type PropsType = {
    user: UserType
}

const User: React.FC<PropsType> = ({ user}) => {

    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    const followUser = (userId: number) => {
        dispatch(follow(userId));
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={styles.userAvatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollowUser(user.id)
                                      }}>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          followUser(user.id)
                                      }}>Follow</button>}

                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
    </div>
}

export default User