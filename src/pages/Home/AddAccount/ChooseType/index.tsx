import './ChooseType.scss';

import { FC } from "react"

import SmallWidget from '../../../../Components/ui/SmallWidget';

import { BsBank2, BsCashCoin } from 'react-icons/bs'

import { useSwiper } from 'swiper/react';

export enum AccountOption {
    bank,
    manual
}

type Props = {
};

const ChooseType: FC<Props> = ({ }) => {

    const swiper = useSwiper();

    const handleChoice = (accountOption: AccountOption) => {
        
        swiper.slideNext();

    }

    return (
        <div
            className="add-account-choose-type"
        >
            <h2>Add account</h2>
            <div className='divider'></div>
            <div className='account-options'>
                <SmallWidget
                    className='account-option'
                    onClick={handleChoice.bind(null, AccountOption.bank)}
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
                    onClick={handleChoice.bind(null, AccountOption.manual)}
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

export default ChooseType