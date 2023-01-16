import './Home.scss'

import { useState } from 'react';

import { apiConfig } from '../../data/apiConfig';
import { IAccount } from '../../interfaces/IAccount';

import { BsPlusLg } from 'react-icons/bs'

import AccountCard from './AccountCard';
import AddAccount from './AddAccount';
import SmallWidget from '../../Components/ui/SmallWidget';
import Modal from '../../Components/ui/Modal';
import useFetch from '../../hooks/useFetch';
import { useAuthContext } from '../../context/authContext';

const Home = () => {

    const { user } = useAuthContext();

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const accounts = useFetch<IAccount[]>(apiConfig.accountsUrl, {
        method: 'GET',
        credentials: 'include'
    })

    const handleAddAccount = () => {
        
        if (!user._id) { return }
        
        setIsCreateModalOpen(true)
    }

    return (
        <div id='home-page'>
            <div className='accounts-list'>
                {
                    accounts.data?.map(a =>
                        <AccountCard
                            key={a.resourceId}
                            name={a.name || a.institution_name}
                            currency={a.currency}
                            balance={Number(a.balances[0].balanceAmount.amount)}
                        />
                    )
                }
                <SmallWidget className='add-account' onClick={handleAddAccount}>
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