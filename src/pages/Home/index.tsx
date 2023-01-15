import './Home.scss'

import { useState } from 'react';

import { BsPlusLg } from 'react-icons/bs'

import AccountCard from './AccountCard';
import AddAccount from './AddAccount';
import SmallWidget from '../../Components/ui/SmallWidget';
import Modal from '../../Components/ui/Modal';
import useFetch from '../../hooks/useFetch';
import { apiConfig } from '../../data/apiConfig';
import { IAccount } from '../../interfaces/IAccount';

const Home = () => {

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const accounts = useFetch<IAccount[]>(apiConfig.accountsUrl, {
        method: 'GET',
        credentials: 'include'
    })
    console.log(accounts);

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