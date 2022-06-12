import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from "react-redux";
import { toggle } from "../../modalSlice"

function SignUpForm() {
    const modal = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        function handleModal(e) {
            if (e.target == modal.current) dispatch(toggle())
        }
        window.addEventListener('click', handleModal)

        return function cleanupListener() {
            window.removeEventListener('click', handleModal)
        }
    })
    return (
        <div ref={modal}
            className="fixed top-0 left-0 min-h-[100vh] min-w-[100vw]  z-50 bg-blue-800 bg-opacity-75 origin-center flex justify-center items-center appear-done enter-done"
        >
            <div className='flex justify-center w-full max-w-md items-center   p-2'>
                <form className='flex flex-col gap-y-4  w-full items-center rounded-md bg-white p-4'>
                    <div className='w-full'>
                        <input className='p-5 w-full border-2 rounded-md outline-none focus:border-blue-600' placeholder='Full Name' type="text" name="fullNmae" />
                    </div>
                    <div className='w-full'>
                        <input className='p-5 w-full border-2 rounded-md outline-none focus:border-blue-600' placeholder='email' type="email" name="email" />
                    </div>
                    <div className='w-full'>
                        <input className='p-5 w-full border-2 rounded-md outline-none focus:border-blue-600' placeholder='password' type="password" name="password" />
                    </div>

                    <div className='w-full'>
                        <button class="px-4 w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm