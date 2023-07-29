import Image from 'next/image'

const Loading = ({hasLoaded}) => {
  return (
    <div className={`flex ${hasLoaded? `opacity-0 -z-20`: ''} transition-opacity min-h-screen flex-col absolute top-0 left-0 w-full bg-primary gap-5 items-center justify-center`}>
        <Image src="/clg.png" className='w-[400px] h-auto' width={400} height={400} alt="Sairam Institutions" />
        <span className="loader"></span>
    </div>
  )
}

export default Loading