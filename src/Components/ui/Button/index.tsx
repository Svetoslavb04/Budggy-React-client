import './Button.scss'
import { FC, DetailedHTMLProps } from 'react'

type Props = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<Props> = (props) => {

    const { children, className, ...rest } = props;

    return (
        <button
            className={`button${className ? ' ' + className : ''}`}
            {...rest}
        >{children}</button>
    )
}

export default Button