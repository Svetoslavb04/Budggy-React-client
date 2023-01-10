import './App.scss';

import { useState } from 'react';

import { BsPlusLg } from 'react-icons/bs'

import AccountCard from '../AccountCard';
import SmallWidget from '../Core/SmallWidget';
import Modal from '../Core/Modal';
import AddAccount from '../AddAccount';

function App() {

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div id='app' className="app">
      <header>
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
      </header>
    </div>
  );
}

export default App;
