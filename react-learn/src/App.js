import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/messages/*' element={<DialogsContainer />}/>
                        <Route path='/users' element={<UsersContainer />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
