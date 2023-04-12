import React from 'react'

const FormCompo = ({title,artitle,hmlfor, type}) => {
  return (
    <>
    
    <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">{title}
            </label>
            <label htmlFor={hmlfor} className="mb-1 text-xs sm:text-sm tracking-wide text-white">{artitle} 
            </label>
        </div> 

        <div className="relative">
            <input id={hmlfor} type={type} name={hmlfor} className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder={title} />
        </div>
        </div>

    </>
  )
}

export default FormCompo