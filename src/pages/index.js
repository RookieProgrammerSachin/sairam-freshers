import React, { useState, useRef, useContext, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import RulesDialog from "../components/RulesDialog";
import Head from "next/head";
import { UserContext } from "@/lib/context";
import Loading from "@/components/Loading";
import { login } from "@/lib/login";

export default function Home() {
  // states for form and modal
  const userNameRef = useRef()
  const pwdRef = useRef()
  const [buttonDisabled, setbuttonDisabled] = useState(false)
  const [openRules, setOpenRules] = useState(false)
  const { user, setUser, loading } = useContext(UserContext)

  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/portal')
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setbuttonDisabled(true)

    const userEmail = userNameRef.current.value;
    const userPwd = pwdRef.current.value

    try {
      const result = await login(userEmail + "@sairamfreshers.com", userPwd)
      setUser(result.user)
    } catch (e) {
      console.log(e)
      setUser(null)
      setbuttonDisabled(false)
    }

    // router.push('/portal')
  }

  return (
    <>
      <Head>
        <title>Login | Sairam Fresher's Portal</title>
      </Head>

      <Loading hasLoaded={!loading} />
      <Layout>
        <form onSubmit={handleSubmit} className="flex w-[22rem] max-w-[25rem] mt-16 flex-col font-sans gap-4 border rounded-lg border-silver bg-primary-light px-4 py-12 pb-4">
          <Image className="md:w-[200px] md:h-auto h-auto w-[250px] mb-8 mx-auto" src='/clg.png' width={400} height={400} alt='sairam logo' />
          <input placeholder="Register number" ref={userNameRef} className="px-4 py-2 rounded-md bg-white" type='text' inputMode="numeric" pattern="[0-9]{11}" required />
          <input placeholder="Password" ref={pwdRef} className="px-4 py-2 rounded-md bg-white" type='password' required />
          <button type='submit' className={`${buttonDisabled ? 'pointer-events-none cursor-default bg-[#99bbdd]' : 'bg-[#0a66c3]'} mb-6 outline-none border-none rounded-full w-full text-center text-primary px-4 py-2`} >{buttonDisabled ? (<span className='loader loader-button'></span>) : `Sign In`}</button>
        </form>
        <button type='button' onClick={() => setOpenRules(!openRules)} className="text-sm mt-6 underline text-blue-400">Read the rules before proceeding</button>
        <RulesDialog isOpen={openRules} setIsOpen={setOpenRules} />
      </Layout>
    </>
  );
}
