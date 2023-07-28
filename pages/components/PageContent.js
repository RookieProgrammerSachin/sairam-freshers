import React from 'react'

const PageContent = ({ children }) => {
  return (
    <div className='flex flex-col max-h-fit px-8 py-12 border border-silver rounded-md bg-primary gap-4'>
        <h1 className='font-medium text-2xl'>Hello, USER</h1>
        {children}
    </div>
  )
}

export default PageContent