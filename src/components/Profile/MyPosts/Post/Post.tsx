import React, {FC} from 'react';
import s from './Post.module.css';

type PropsType = {
    text: string
    likesCount: number
}

const Post: FC<PropsType> = ({text, likesCount}) => {
    return (
        <div className={s.item}>

            <img src='https://w7.pngwing.com/pngs/39/283/png-transparent-user-user-people-linear-icon-user-infographic-people-monochrome-thumbnail.png'/>
            { text }

            <div>
                <span>like</span> {likesCount}
            </div>
        </div>
    )
}

export default Post;