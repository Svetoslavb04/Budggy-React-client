import './Navigation.scss';

import { CiSettings } from 'react-icons/ci'

import { useAuthContext } from '../../context/authContext';

import Button from '../ui/Button';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const { user, logout } = useAuthContext();

    return (
        <nav id='navigation' className='widget'>
            <div className='auth-buttons'>
                {
                    user.logged
                        ?
                        <Button
                            className='logout-button'
                            onClick={logout}
                        ><span className='nav-link-text'>Logout</span></Button>
                        : <>
                            <NavLink to='login'>
                                <Button
                                    className='login-button'
                                ><span className='nav-link-text'>Login</span></Button>
                            </NavLink>
                            <NavLink to='register'>
                                <Button
                                    className='register-button'
                                ><span className='nav-link-text'>Register</span></Button>
                            </NavLink>

                        </>

                }
            </div>
            <div className='nav-settings'>
                <CiSettings />
            </div>
        </nav>
    )
}

export default Navigation