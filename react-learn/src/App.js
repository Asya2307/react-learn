import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId'> <ProfileContainer /> </Route>
                    <Route path='/messages'> <DialogsContainer /></Route>
                    <Route path='/users'> <UsersContainer /></Route>
                    <Route path='/login'> <Login /></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;