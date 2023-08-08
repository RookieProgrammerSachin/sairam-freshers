import Navbar from '../components/Navbar'
import BodyContainer from '../components/BodyContainer'
import { useContext, useEffect } from 'react'
import { UserContext } from '@/lib/context'
import { useRouter } from 'next/router'
import Loading from './Loading'

export default function MainLayout({ children }) {
  const { user, loading, setLoading } = useContext(UserContext)
  // const router = useRouter()

  // useEffect(() => {
  //   if (!user) router.push('/')
  // }, [user])

  return (
    <>
        <Loading hasLoaded={!loading} />
        <Navbar />
        <BodyContainer>
            {children}
        </BodyContainer>
    </>
  )
}
