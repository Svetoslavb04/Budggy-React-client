import './Footer.scss';

import { RiDashboard3Line } from 'react-icons/ri'
import { MdMoreTime } from 'react-icons/md';
import { ImStatsBars } from 'react-icons/im';
import { CgMoreR } from 'react-icons/cg';
import { BiTransfer } from 'react-icons/bi';

import { useAuthContext } from '../../context/authContext';

import { NavLink } from 'react-router-dom';

const Footer = () => {

    const { user, logout } = useAuthContext();

    return (
        <nav id='footer' className='widget'>

            <div id='footer-dashboard' className='footer-element-container'>
                <NavLink to="/" className='footer-element'>
                    <div className='footer-icon'><RiDashboard3Line /></div>
                    <p>Dashboard</p>
                </NavLink>
            </div>
            <div id='footer-planning' className='footer-element-container'>
                <NavLink to="/plan" className='footer-element'>
                    <div className='footer-icon'><MdMoreTime /></div>
                    <p>Planning</p>
                </NavLink>
            </div>
            <div id='footer-action' className='footer-element-container'>
                <NavLink to="/action" className='footer-element'>
                    <div className='footer-icon'><BiTransfer /></div>
                </NavLink>
            </div>
            <div id='footer-statistics' className='footer-element-container'>
                <NavLink to="/statistics" className='footer-element'>
                    <div className='footer-icon'><ImStatsBars /></div>
                    <p>Statistics</p>
                </NavLink>
            </div>
            <div id='footer-more' className='footer-element-container'>
                <NavLink to="/more" className='footer-element'>
                    <div className='footer-icon'><CgMoreR /></div>
                    <p>More</p>
                </NavLink>
            </div>
        </nav>
    )
}

export default Footer