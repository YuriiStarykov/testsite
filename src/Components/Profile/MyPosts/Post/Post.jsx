import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
    console.log(props.message);

    return <div className={s.item}>
            <img src='https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/050/993/image/base_c66463a424.gif'/>
        {props.message}
        <div>
            <span>Like</span></div>
    </div>
}
export default Post;