import './AddAccount.scss';

import { FC } from "react"

import SmallWidget from '../../../Components/ui/SmallWidget';

import { BsBank2, BsCashCoin } from 'react-icons/bs'

const AddAccount: FC = () => {

    const handleAddBank = () => {

    }

    const handleAddManualAccount = () => {
        
    }

    return (
        <div
            className="add-account-container widget"
        >
            <h2>Add account</h2>
            <div className='divider'></div>
            <div className='account-options'>
                <SmallWidget
                    className='account-option'
                    onClick={handleAddBank}
                >
                    <div className='account-option-info'>
                        <h3>Bank Sync</h3>
                        <p>Synchronize your bank account transactions automatically</p>
                    </div>
                    <div className='account-option-icon'>
                        <BsBank2 />
                    </div>
                </SmallWidget>
                <SmallWidget
                    className='account-option'
                    onClick={handleAddManualAccount}
                >
                    <div className='account-option-info'>
                        <h3>Manual</h3>
                        <p>Create an account which you will update manually.</p>
                    </div>
                    <div className="account-option-icon">
                        <BsCashCoin />
                    </div>
                </SmallWidget>
            </div>
        </div>
    )
}

export default AddAccount