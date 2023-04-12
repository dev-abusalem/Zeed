import React from 'react'

const SpacialFeatureCard = ({image, title, description}) => {
  return (
    <>
            <div className='md:w-1/4 mb-4 md:mb-0 p-10 h-[500px] border-2 border-slate-400 hover:border-slate-50 duration-100 rounded-xl'>
                <img src={image} alt="image" />
                <h2 className='text-2xl my-2 font-semibold'>{title}</h2>
                <p>{description}</p>
            </div>
    </>
  )
}

export default SpacialFeatureCard