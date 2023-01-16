import './Login.scss'

import { FormEvent } from 'react'

import { useAuthContext } from '../../context/authContext';

import Button from '../../Components/ui/Button';
import Input from '../../Components/ui/Input';

const Login = () => {

    const { login } = useAuthContext();

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get('email')?.toString() || ''
        const password = formData.get('password')?.toString() || ''

        login(email, password)

    }

    return (
        <div id='login-page'>
            <div className='widget login-form-container'>
                <h2>Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='email-container'>
                        <Input className='email' type='text' name='email' placeholder='Email' />
                    </div>
                    <div className='password-container'>
                        <Input className='password' type='password' name='password' placeholder='Password' />
                    </div>
                    <div className='button-container'>
                        <Button className='login-button' type='submit'>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
