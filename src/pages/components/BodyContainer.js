import React from 'react'

const BodyContainer = ({ children }) => {
  return (
    <div className='main-container max-w-screen-2xl grid w-full grid-rows-[0.7fr_2fr] md:grid-rows-none md:grid-cols-[0.7fr_2fr] gap-8 px-12 py-10'>
        {children}
    </div>
  )
}

export default BodyContainer