import React from 'react'
import { useDispatch } from "react-redux";
import { toggle } from "../../modalSlice"
function Form() {
    const dispatch = useDispatch()
    const handleSignUp = (e) => {
        e.preventDefault()

        dispatch(toggle())


    }
    return (
        <div className='flex justify-center items-center bg-blue-600  p-2'>
            <form className='flex flex-col gap-y-4 max-w-md w-full items-center rounded-md bg-white p-4'>
                <div className='w-full'>
                    <input className='p-5 w-full border-2 rounded-md outline-none focus:border-blue-600' placeholder='email' type="email" name="email" />
                </div>
                <div className='w-full'>
                    <input className='p-5 w-full border-2 rounded-md outline-none focus:border-blue-600' placeholder='password' type="password" name="password" />
                </div>

                <div className='w-full'>
                    <button className="px-4 w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Sign In
                    </button>
                </div>

                <div className='w-full'>
                    <button onClick={handleSignUp} className="px-4 w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form