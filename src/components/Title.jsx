import React from 'react'

const Title = ({text1,text2,text3,text4,text5,text6}) => {
  return (
    <>
      <h1 className='text-[50px] md:text-[65px] lg:text-[85px] text-[#104386] leading-[58px] md:leading-16 lg:leading-24 '>{text1} <br/>{text2}<span className='opacity-95'>{text3}</span><span className='opacity-85'>{text4}</span><span className='opacity-75'>{text5}</span><span className='opacity-65'>{text6}</span></h1>
    </>
  )
}

export default Title
