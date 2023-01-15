import './Home.scss'

import { useState } from 'react';

import { BsPlusLg } from 'react-icons/bs'

import AccountCard from './AccountCard';
import AddAccount from './AddAccount';
import SmallWidget from '../../Components/ui/SmallWidget';
import Modal from '../../Components/ui/Modal';
import useFetch from '../../hooks/useFetch';
import { apiConfig } from '../../data/apiConfig';

const Home = () => {

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const accounts = useFetch<any>(apiConfig.accountsUrl, {
        method: 'GET',
        credentials: 'include'
    })
    console.log(accounts);
    
    return (
        <div id='home-page'>
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
        </div>
    )
}

export default Home