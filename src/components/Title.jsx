import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='flex justify-between'>
        <hr className='w-10 h-[2px] bg-[#cf6dfc] mt-4 mx-3'/>
      <h1 className='font-semibold uppercase text-2xl'><span>{text1}</span> <span>{text2}</span></h1>
      <hr className='w-10 h-[2px] bg-[#cf6dfc] mt-4 mx-3'/>

    </div>
  )
}

export default Title
