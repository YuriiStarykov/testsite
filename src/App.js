import React from 'react';
import './App.css';
import {Header, Nav} from './Components';
import Profile from './Components/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Profile/>
    </div>
  );
}

export default App;
