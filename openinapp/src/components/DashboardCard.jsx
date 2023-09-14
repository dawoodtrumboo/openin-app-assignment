import React from 'react'
import { wallet } from '../assets'
const DashboardCard = () => {
  return (
    <div className='flex flex-col border-2 border-[#E0E0E0] rounded-[13px] px-6 py-4 gap-2 shadow-md'>
                    <img src={wallet} className='rounded-[50%] w-[20px] h-[20px] bg-[#7FCD93] object-scale-down'/>
                    <p className=' text-xs'>Total Revenues</p>
                    <div className='space-x-10'>
                    <span className=' text-lg font-700'>$2, 129,430</span>
                    <span className='text-[6px] text-[#3CC952] bg-[#dafcde] rounded-xl px-2 py-1'>+2.5%</span>
                    </div>
                   
                </div>
  )
}

export default DashboardCard