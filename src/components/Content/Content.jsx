import React from 'react'

const Content = ({Title,content}) => {
  return (
    <div className='flex flex-col items-center w-2/3 gap-6 md:w-2/5 md:items-start'>
        <h1 className='text-3xl font-semibold text-white transform scale-y-150 font-dharma'>{Title}</h1>
        <p 
        className='text-xl font-semibold text-white whitespace-pre-wrap font-Poppins'
        >
          {content}
        </p>
    </div>
  )
}

export default Content