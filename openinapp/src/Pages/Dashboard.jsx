import React from 'react'
import { DashboardCard, Navbar } from '../components'
import { wallet } from '../assets'

const Dashboard = () => {
  return (
    <div className='p-10  '>
        <Navbar/>
        <div className='flex flex-col items-center'>
        <h1 className=' font-montserrat font-900 my-10 text-[20px]'>Dashboard</h1>
            <div className='grid grid-cols-2 gap-5'>
               <DashboardCard />
               <DashboardCard />
               <DashboardCard />
               <DashboardCard />
            </div>
        </div>
    </div>
  )
}

export default Dashboard