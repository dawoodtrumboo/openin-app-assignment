import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { dashboard,transaction,schedule,user,settings } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MNavbar = () => {
  return (
    <div className='hidden'>
    <div className='absolute right-0 top-0 flex justify-center h-full w-[60%] z-10 bg-gradient-to-r from-blue-500 to-blue-800'>
            <div className='m-10 text-white'>
            <FontAwesomeIcon icon={faBars} size='2x' className='absolute right-5 top-3'/>
                    <h1 className='mb-20 text-[25px] font-montserrat font-900 mt-10'>Board.</h1>
                    <div className=' flex flex-col justify-between font-montserrat font-400 h-[450px] '>
                        <div>
                        <div className='flex gap-3 mb-6 items-center'>
                        <img src={dashboard}/>
                        <div>Dashboard</div>
                        </div>
                        <div className='flex gap-3 mb-6 items-center'>
                        <img src={transaction}/>
                        <div>Transactions</div>
                        </div>
                        <div className='flex gap-3 mb-6 items-center'>
                        <img src={schedule}/>
                        <div>Schedules</div>
                        </div>
                        <div className='flex gap-3 mb-6 items-center'>
                        <img src={user}/>
                        <div>Users</div>
                        </div>
                        <div className='flex gap-3 mb-6 items-center'>
                        <img src={settings}/>
                        <div>Settings</div>
                        </div>
                        </div>
                        <div className=' items-self-end'>
                            <p>Help</p>
                            <p>Contact</p>
                        </div>
                    </div>
            </div>

        </div>
        </div>
  )
}

export default MNavbar