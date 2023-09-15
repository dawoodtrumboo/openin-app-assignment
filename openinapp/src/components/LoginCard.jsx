import React from 'react'
import CustomButton from './CustomButton'

const LoginCard = () => {

  const style = {
    width: '100%',        
    color: 'white',         
    paddingTop: '.7rem',
    paddingBottom: '.7rem',
    borderRadius: '5px',
  };
  return (
    <div className='w-full '>

        <div className='bg-white rounded-xl p-10 space-y-3 '>
            <div className='flex flex-col space-y-2 font-lato'>
            <span>Email Address</span>
            <input type='text' placeholder='Enter your email' className='bg-[#F5F5F5] px-3' style={style}/>
            </div>
            <div className='flex flex-col space-y-2 font-lato'>
            <span>Password</span>
            <input type='text' placeholder='Enter you password' className='bg-[#F5F5F5] px-3' style={style}/>
            </div>
            <p className='text-[#4285F4]'>Forget password?</p>
            <CustomButton 
            style ={style}
            name = {`Sign In`}
            />

        </div>
    </div>
  )
}

export default LoginCard