import './Register.scss'

import { FormEvent } from 'react'

import { useAuthContext } from '../../context/authContext';

import Button from '../../Components/ui/Button';
import Input from '../../Components/ui/Input';

const Register = () => {

    const { register } = useAuthContext();

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get('email')?.toString() || ''
        const username = formData.get('username')?.toString() || ''
        const password = formData.get('password')?.toString() || ''

       register(email, username, password)
       
    }

    return (
        <div id="register-page">
            <div className='widget register-form-container'>
                <h2>Register</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='email-container'>
                        <Input className='email' type='text' name='email' placeholder='Email' />
                    </div>
                    <div className='username-container'>
                        <Input className='username' type='text' name='username' placeholder='Username' />
                    </div>
                    <div className='password-container'>
                        <Input className='password' type='password' name='password' placeholder='Password' />
                    </div>
                    <div className='repassword-container'>
                        <Input className='repassword' type='password' name='repassword' placeholder='Repeat password' />
                    </div>
                    <div className='button-container'>
                        <Button className='register-button' type='submit'>Register</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register

