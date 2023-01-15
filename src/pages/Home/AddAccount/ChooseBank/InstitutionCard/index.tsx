import './InstitutionCard.scss'

import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'

import { IInstitution } from '../../../../../interfaces/IInstitution'

type Props = {
    institution: IInstitution
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const InstitutionCard: FC<Props> = ({ institution, className, ...rest }) => {
    return (
        <div className={`institution-card-container widget ${className || ''}`} {...rest}>
            <div className='institution-logo-container'>
                <img src={institution.logo} alt="institution" />
            </div>
            <div className='institution-name'>{institution.name}</div>
        </div>
    )
}

export default InstitutionCard