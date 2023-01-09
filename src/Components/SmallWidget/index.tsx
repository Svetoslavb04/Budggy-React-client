import './SmallWidget.scss'

import { DetailedHTMLProps, FC, ReactNode } from 'react'

export type SmallWidgetProps
    = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const SmallWidget: FC<SmallWidgetProps> = (props) => {

    return (
        <div {...props} className={`small-widget ${props.className || ''}`}>
            {props.children}
        </div>
    )
}

export default SmallWidget