import './Input.scss';

import { FC, DetailedHTMLProps } from 'react'

type Props = DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: FC<Props> = ({ className, ...rest }) => {
    return (
        <input className={`_input${className ? ' ' + className : ''}`} {...rest} />
    )
}

export default Input