import React from 'react'
import Form from '../components/Login/Form'
import SignUpForm from '../components/Login/SignUpForm'
import LoginImage from "../img/login-image.jpg"
import { useSelector } from 'react-redux'

function Login() {
    const open = useSelector((state) => state.modal.value)
    return (
        <div className='grid grid-cols-1 h-full lg:grid-cols-2 min-h-[100vh]'>
            <div className='hidden justify-center items-center overflow-hidden  lg:flex'>
                <img src={LoginImage} className="shrink-0 min-h-full min-w-full" alt="chat with friends" />
            </div>
            <Form />
            {open && <SignUpForm />}
        </div>
    )
}

export default Login