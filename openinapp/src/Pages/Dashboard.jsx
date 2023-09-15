import React from 'react'
import { Bar, CustomButton, DashCard, DashboardCard, Donut, Navbar, NewProfileB } from '../components'
import { Card} from "@tremor/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faXmark} from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {

  return (
    <div className=' relative p-10'>
        <Navbar/>
       
        <div className='flex flex-col items-center space-y-10 '>
         {/* <div className='absolute bg-black w-full h-full z-10 opacity-40 top-0 '>
         </div>    */}
         {/* <NewProfileB/> */}
            
            
       
        <h1 className=' font-montserrat font-900 my-10 text-[20px]'>Dashboard</h1>
            <div className='flex justify-between flex-wrap gap-3 '>
               <DashCard/>
            </div>
            <div className='w-full'>
                <Bar/>
            </div>
            <div className='w-full'>
                <Donut/>
            </div>
            <div className='w-full'>
                <Card className='w-full flex flex-col justify-center items-center space-y-3 py-[40px]'>
                    <div className='bg-[#F5F5F5] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center'>
                    <FontAwesomeIcon icon={faPlus} color='#999CA0' size='2x' />
                    </div>
                    <div className='text-[#858585]'>Add Profile</div>
                </Card>
            </div>

        </div>
    </div>
  )
}

export default Dashboard