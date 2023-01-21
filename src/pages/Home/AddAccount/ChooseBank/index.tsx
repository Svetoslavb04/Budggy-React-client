import './ChooseBank.scss';

import { FC, useState } from "react"

import { apiConfig } from '../../../../data/apiConfig';

import { IInstitution } from '../../../../interfaces/IInstitution';

import { AiOutlineLeftCircle } from 'react-icons/ai'

import { useSwiper } from 'swiper/react';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import useFetch from '../../../../hooks/useFetch';
import InstitutionCard from './InstitutionCard';
import { getBankAuthenticationLink } from '../../../../services/openBankingService';


const ChooseBank: FC = () => {

    const swiper = useSwiper();
    const goBack = () => { swiper.slideTo(0) }

    const countryState = useFetch<any>('https://restcountries.com/v3.1/all');
    const countriesNormalized: Country[] = countryState.data
        ?.map((countryData: any) => ({
            name: countryData.name.common,
            code: countryData.cca2,
            flagUrl: countryData.flags.png
        }))
        .sort((c1: Country, c2: Country) => c1.name.localeCompare(c2.name))

    const [selectedCountry, setSelectedCountry] = useState<string>('');

    const institutionsState = useFetch<IInstitution[]>(`${apiConfig.institutionsUrl}?country=${selectedCountry}`, {
        method: 'GET',
        credentials: 'include'
    });

    const handleCountrySelection = (e: SelectChangeEvent<string>) => {
        setSelectedCountry(e.target.value)
    }

    const handleInstitutionClick = async (institution: IInstitution) => {
        console.log(institution);

        try {

            const data = await getBankAuthenticationLink(institution.id)
            
            window.open(data.link, '_blank');

        } catch (error) { console.log(await error) }

    }

    return (
        <div
            className="add-account-choose-bank"
        >
            <div className='step-heading'>
                <AiOutlineLeftCircle onClick={goBack} />
                <h2>Your Bank</h2>
            </div>
            <div className='divider'></div>
            <div className='add-account-choose-bank-content'>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Your country</InputLabel>
                    <Select
                        label="Your country"
                        placeholder='Your country'
                        MenuProps={{ classes: { paper: 'choose-bank-countries-list' } }}
                        onChange={handleCountrySelection}
                        value={selectedCountry}
                    >
                        {
                            countriesNormalized?.map(country =>
                                <MenuItem
                                    key={country.name}
                                    value={country.code}
                                >
                                    <div className='country-item'>
                                        <span className='country-flag-container'><img src={country.flagUrl} alt="flag" /></span>
                                        <span className='country-name'>{country.name}</span>
                                    </div>
                                </MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
                <div className='add-account-choose-bank-institutions'>
                    {
                        institutionsState.data?.map(
                            i => <InstitutionCard
                                key={i.name}
                                institution={i}
                                onClick={handleInstitutionClick.bind(null, i)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ChooseBank

interface Country { name: string, code: string, flagUrl: string }