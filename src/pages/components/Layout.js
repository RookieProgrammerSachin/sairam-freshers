import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      {children}
    </main>
  )
}

export default Layout