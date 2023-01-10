import './RegisterForm.scss'

import { FormEvent } from 'react'

import Button from '../Core/Button';
import Input from '../Core/Input';

const RegisterForm = () => {

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get('username')
        const password = formData.get('password')
        const repassword = formData.get('repassword')
        
    }

    return (
        <div className='widget register-form-container'>
            <h2>Register</h2>
            <form onSubmit={handleFormSubmit}>
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
    )
}

export default RegisterForm

