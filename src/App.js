import React from 'react';
import './App.css';
import {Header, Navbar} from './Components';
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*<Profile/>*/}
            <div className='app-wrapper-content'>
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;
