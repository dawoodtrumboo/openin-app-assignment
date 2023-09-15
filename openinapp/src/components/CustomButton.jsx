import React from 'react'

const CustomButton = ({style,name}) => {
  return (
    <button style={style} className='block font-montserrat font-900 bg-[#4285F4]' >
        {name}
    </button>
  )
}

export default CustomButton