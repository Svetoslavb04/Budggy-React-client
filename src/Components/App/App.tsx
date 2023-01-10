import './App.scss';

import AccountCard from '../AccountCard';
import { useState } from 'react';

import { BsPlusLg } from 'react-icons/bs'

import AccountCard from '../AccountCard';
import SmallWidget from '../Core/SmallWidget';

function App() {
  return (
    <div id='app' className="app">
      <header>
        <div className='accounts-list'>
          <AccountCard name='Central Cooperative Bank' currency='BGN' balance={1000} />
          <AccountCard name='DSK Bank' currency='BGN' balance={1000} />
          <AccountCard name='Revolut' currency='BGN' balance={1000} />
          <AccountCard name='UniCredit' currency='BGN' balance={1000} />
          <SmallWidget className='add-account'>
            <div className='add-account-icon-container'>
              <BsPlusLg />
            </div>
          </SmallWidget>
        </div>

      </header>
    </div>
  );
}

export default App;
