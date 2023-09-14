
import React from 'react'
import { LoginCard } from '../components'
import {apple,google} from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareTwitter, faGithub,faDiscord } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
  return (
    
    <div className='flex flex-col h-screen max-w-full '>
        <div className='bg-[#4285F4] h-1/3 max-w-full'>
            <div className='w-full px-10 pt-10 space-y-14'>
                <span className='font-poppins text-white text-[12px] font-700'>LOGO</span>
                <h1 className='w-full m-auto text-center font-monserrat text-[40px] font-900 text-white'>Board.</h1>
            </div>

        </div>
        <div className='bg-[#F8FAFF] '>
            <div className='flex flex-col items-center px-10 space-y-[15px]'>
                <div className='flex flex-col items-center'>
                <h1 className='font-monserrat text-[25px] font-700'>Sign In</h1>
                <span className='font-lato font-400 '>Sign in to your account</span>
                </div>
                <div className='flex gap-14 text-[8px] text-[#858585] font-monserrat'>
                    <div className='flex gap-5 items-center bg-white rounded-xl px-8 py-2'>
                        <img src={google} className='w-[10px] h-[10px]'/>
                        <span>Sign in with Google</span>
                    </div>
                    <div className='flex gap-5 items-center bg-white rounded-xl px-8 py-2'>
                        <img src={apple} className='w-[10px] h-[10px]'/>
                        <span>Sign in with Apple</span>
                    </div>
                </div>
                <LoginCard />
                <p className='font-lato text-[#858585]'>Don't have an account? <span className='text-[#4285F4]'>Register here</span></p>
                
            </div>
        </div>
        <div className='bg-[#4285F4] h-1/3'>
            <div className=' flex justify-center items-center gap-10 mx-auto w-full h-full border-2 border-red-600 '>
            <FontAwesomeIcon icon={faGithub} size='2x' color='#FFF' />
            <FontAwesomeIcon icon={faLinkedin} size='2x'color='#FFF' />
            <FontAwesomeIcon icon={faSquareTwitter} size='2x' color='#FFF' />
            <FontAwesomeIcon icon={faDiscord} size='2x' color='#FFF' />
            </div>
        </div>
    </div>
  )
}

export default Login