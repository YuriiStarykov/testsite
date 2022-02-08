import React from 'react';
import s from './Navbar.module.css'
const Navbar = () => {
    return <nav className={s.navbar}>
    <div className={s.item}>
        <a>Plofile</a></div>
    <div className={s.item}>
        <a>Messages</a></div>
    <div className={s.item}>
        <a>News</a></div>
    <div className={s.item}>
        <a>Music</a></div>
    <div className={s.item}>
        <a>Settings</a></div>
  </nav>
}
export {Navbar};