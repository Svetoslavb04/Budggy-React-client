import './Content.scss';

import { Route, Routes } from 'react-router-dom';

import Navigation from '../Navigation';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Footer from '../Footer';

const Content = () => {
    return (
        <div id='content'>
            <Navigation />
            <div id='main'>
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route index path='/login' element={<Login />} />
                    <Route index path='/register' element={<Register />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default Content