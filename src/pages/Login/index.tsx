import './Login.scss'

import { FormEvent } from 'react'

import Button from '../../Components/ui/Button';
import Input from '../../Components/ui/Input';

const Login = () => {

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get('username')
        const password = formData.get('password')

    }

    return (
        <div id='login-page'>
            <div className='widget login-form-container'>
                <h2>Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='username-container'>
                        <Input className='username' type='text' name='username' placeholder='Username' />
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
