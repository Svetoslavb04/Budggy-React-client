import './Modal.scss';

import { FC, ReactNode, MouseEvent } from "react"

export type Props = {
    opened: boolean,
    close: () => void,
    children: ReactNode
}

const Modal: FC<Props> = ({ opened, close, children }) => {

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {

        const target = e.target as Element;

        if (target.classList.contains('modal')) {
            close()
        }

    }

    return (
        <div
            className={`modal${opened ? ' modal-visible' : ''}`}
            onClick={handleClick}
        >
            {
                opened
                    ? children
                    : <></>
            }
        </div>
    )
}

export default Modal