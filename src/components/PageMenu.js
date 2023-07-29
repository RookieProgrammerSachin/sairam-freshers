import Image from 'next/image'
import Link from 'next/link'

const PageMenu = ({ currentPage }) => {
  return (
    <div className="flex flex-col max-h-fit px-8 py-12 border border-silver rounded-md bg-primary gap-4">
            <Link href="/portal"><Image src="/home.png" class="w-[1.5rem] inline" alt="Home" width={100} height={100} /><Image src="/chevron-down.svg" alt="Right arrow" className="w-[1.5rem] -rotate-90 inline" width={100} height={100} /></Link>
            <Link className='hover:text-gray-500 transition-colors' href="/guide" class="menu-link ff-inter fs-2s">Fresher&lsquo;s guide {currentPage===0 && '→'}</Link>
            <Link className='hover:text-gray-500 transition-colors' href="/orientation" class="menu-link ff-inter fs-2s">Orientation schedule {currentPage===1 && '→'}</Link>
            <Link className='hover:text-gray-500 transition-colors' href="/admission" class="menu-link ff-inter fs-2s">Provisional Admission Letter {currentPage===2 && '→'}</Link>
    </div>
  )
}

export default PageMenu