import { NavBar } from '../../components'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { clerkLinks } from "../../lib/constants"
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

const ClerkRootLayout = () => {
  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>

        <NavBar navLinks={clerkLinks} />
        
        <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
      <Outlet />
      </ClerkProvider>
      </>
  )
}

export default ClerkRootLayout