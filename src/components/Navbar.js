import { UserContext } from "@/lib/context";
import { logout } from "@/lib/login";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {user, theme, setUser} = useContext(UserContext)
  const router = useRouter()
  
  const handleSignOut = () => {
    logout()
  }

  return (
    <nav className="nav grid grid-rows-3 gap-4 md:gap-8 px-12 py-4 items-center w-full border justify-center border-silver z-10 md:grid-cols-[0.7fr_1fr_0.5fr] md:grid-rows-none">
      <Image
        src="/clg.png"
        width={400}
        height={400}
        alt="Sairam Institutions"
        className="w-[225px] h-auto inline-block mx-auto md:mx-0"
      />

      <h1 className="font-semibold font-sans text-xl w-fit">
        Sairam Freshers Portal [2023 - 2024]
      </h1>

      <Menu as={'div'} className="relative inline-block w-fit mx-auto">
        <Menu.Button className='flex items-center gap-4 border border-silver px-4 py-2 rounded-full'>
          <Image
            src="/user-128-32.png"
            width={50}
            height={50}
            alt="User Menu Icon"
            className="w-[2rem]"
          />
          Welcome, {user?.displayName.split(" ")[0] || 'USER'}
          <Image
            src="/chevron-down.svg"
            width={50}
            height={50}
            alt="User Menu Icon"
            className={`w-[1rem] transition-transform ${isMenuOpen && `rotate-180`}`}
          />
        </Menu.Button>
        <Transition  className="absolute shadow-lg w-full py-6 px-12 top-18 bg-white border rounded-md border-silver"
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className='flex flex-col w-full gap-3'>
            <Link href='/profile' className='hover:text-gray-500'>Profile</Link>
            <Link href={'#'} className='hover:text-gray-500' onClick={handleSignOut}>Sign Out</Link> 
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};

export default Navbar;
