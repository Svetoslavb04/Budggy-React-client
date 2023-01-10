import './Content.scss';

import { useState } from 'react';

import { useAuthContext } from '../../../context/authContext';

import { BsPlusLg } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'

import AccountCard from '../../AccountCard';
import SmallWidget from '../../Core/SmallWidget';
import Modal from '../../Core/Modal';
import Button from '../../Core/Button';
import AddAccount from '../../AddAccount';
import { LoginForm } from '../../LoignForm';

const Content = () => {

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const { user, login, register, logout } = useAuthContext();

    const [isLoginFormOpened, setIsLoginFormOpened] = useState<boolean>(false);
    const [isRegisterFormOpened, setIsRegisterFormOpened] = useState<boolean>(false);

    return (
        <>
            <nav className='widget navigation'>
                <div className='auth-buttons'>
                    {
                        user.logged
                            ? <Button
                                className='logout-button'
                                onClick={logout}
                            >Logout</Button>
                            : <>
                                <Button
                                    className='login-button'
                                    onClick={setIsLoginFormOpened.bind(null, true)}
                                >Login</Button>
                                <Button
                                    className='register-button'
                                    onClick={setIsRegisterFormOpened.bind(null, true)}
                                >Register</Button>
                            </>

                    }
                    <Modal opened={isLoginFormOpened} close={setIsLoginFormOpened.bind(null, false)}>
                        <LoginForm />
                    </Modal>
                </div>
                <div className='nav-settings'>
                    <CiSettings />
                </div>
            </nav>
            <div className='accounts-list'>
                <AccountCard name='Central Cooperative Bank' currency='BGN' balance={1000} />
                <AccountCard name='DSK Bank' currency='BGN' balance={1000} />
                <AccountCard name='Revolut' currency='BGN' balance={1000} />
                <AccountCard name='UniCredit' currency='BGN' balance={1000} />
                <SmallWidget className='add-account' onClick={setIsCreateModalOpen.bind(null, true)}>
                    <div className='add-account-icon-container'>
                        <BsPlusLg />
                    </div>
                </SmallWidget>
                <Modal opened={isCreateModalOpen} close={setIsCreateModalOpen.bind(null, false)}>
                    <div className='add-account-wrapper'>
                        <AddAccount />
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Content