import React from 'react'
import Navbar from './components/Navbar'
import PageMenu from './components/PageMenu'
import PageContent from './components/PageContent'

export default function Portal() {
  return (
    <>
        <Navbar />
        <div className='main-container grid w-full grid-rows-[0.7fr_2fr] md:grid-rows-none md:grid-cols-[0.7fr_2fr] gap-8 px-12 py-10'>
            <PageMenu />
            <PageContent>
                Admission
            </PageContent>
        </div>
    </>
  )
}
