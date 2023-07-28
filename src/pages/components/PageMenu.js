import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PageMenu = () => {
  return (
    <div className="flex flex-col max-h-fit px-8 py-12 border border-silver rounded-md bg-primary gap-4">
            <Link className='hover:text-gray-500 transition-colors' href="/portal"><Image src="/home.png" class="w-[1.5rem] inline" alt="Home" width={100} height={100} /><Image src="/chevron-down.svg" alt="Right arrow" className="w-[1.5rem] -rotate-90 inline" width={100} height={100} /></Link>
            <Link className='hover:text-gray-500 transition-colors' href="/guide" class="menu-link ff-inter fs-2s">Fresher&lsquo;s guide</Link>
            <Link className='hover:text-gray-500 transition-colors' href="/orientation" class="menu-link ff-inter fs-2s">Orientation schedule</Link>
            <Link className='hover:text-gray-500 transition-colors' href="/admission" class="menu-link ff-inter fs-2s">Provisional Admission Letter</Link>
    </div>
  )
}

export default PageMenu