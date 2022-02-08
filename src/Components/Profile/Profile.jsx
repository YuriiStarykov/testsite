import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return <div>
    <div>
    <img src = 'https://99px.ru/sstorage/53/2012/05/tmb_42120_1735.jpg'></img>
    </div>
    <div>
      ava + description
    </div>
        <MyPosts/>
    </div>
}
export default Profile;