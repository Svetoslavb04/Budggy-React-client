import './AccountCard.scss'

import { FC } from 'react'

import SmallWidget, { SmallWidgetProps } from '../Core/SmallWidget';

import { BsCash } from "react-icons/bs";
import { IconType } from 'react-icons/lib';

interface Props extends SmallWidgetProps {
    name: string,
    balance: number,
    currency: string,
    Icon?: IconType
}

const AccountCard: FC<Props> = (props) => {

    const Icon = props.Icon || BsCash;

    const { name, balance, currency, ...rest } = props;
    
    return (
        <SmallWidget {...rest} className='account-card'>
            <div className='account-card-icon-name-container'>
                <div className='account-card-icon'>
                    <Icon />
                </div>
                <h5 className='account-card-name'>{name}</h5>
            </div>
            <h5 className='account-card-balance'>{balance.toFixed(2)} {currency}</h5>
        </SmallWidget >
    )
}

export default AccountCard