import {UserContext} from '@/lib/context'
import {useContext} from 'react'

const PageContent = ({ children }) => {
  const {user} = useContext(UserContext)
  return (
    <div className='flex flex-col max-h-fit px-8 py-12 border border-silver rounded-md bg-primary gap-4'>
        <h1 className='font-bold font-sans text-2xl'>Hello, {user?.displayName}</h1>
        {children}
    </div>
  )
}

export default PageContent