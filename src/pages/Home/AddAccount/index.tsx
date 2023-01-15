import './AddAccount.scss';

import 'swiper/scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FC, useState } from "react"

import ChooseType, { AccountOption } from './ChooseType';
import ChooseBank from './ChooseBank';

const AddAccount: FC = () => {

    const [step, setStep] = useState<number>(0);

    return (
        <div className="add-account-container widget">
            <Swiper
                allowTouchMove={false}
            >
                <SwiperSlide>
                    <ChooseType />
                </SwiperSlide>
                <SwiperSlide>
                    <ChooseBank />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AddAccount