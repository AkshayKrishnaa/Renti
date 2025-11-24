import { NAVBAR_HEIGHT } from '@/lib/constants'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <div
        className ="fixed top-0 left-0 w-full z-50 shadow-xl"
        style = {{height: `${NAVBAR_HEIGHT}px`}}
    >
        <div className="flex justify-between items-center w-full py-3 px-8 text-white" style={{ backgroundColor: '#27272a' }}>
            <div className="flex items-center gap-4 md:gap-6">
                <Link
                href="/"
                className="cursor-pointer hover:!text-primary-300"
                scroll ={false}>
                    <div className = "flex items-center gap-3">
                        <Image
                        src = "/logo.svg"
                        alt = "Rentiful Logo"
                        width = {24}
                        height = {24}
                        className ="w-6 h-6"
                        />
                        <div className="text-xl font-bold text-white hover:text-primary-300">
                            RENT 
                            <span style={{ color: '#eb8686' }}>IFUL</span>
                        </div>
                    </div>
                </Link>
            </div>
                <p className = "hidden md:block" style={{ color: '#e0e0e2' }}>
                    Discover your perfect rental apartment with our advanced search
                </p> 
                <div className="flex items-center gap-5">
                    <Link href="/signin">
                    <Button variant="outline"
                    className="text-white border-white bg-transparent hover:bg-white hover:text-black rounded-lg">
                        Sign In
                    </Button>
                    </Link>
                </div>
                <div className="flex items-center gap-5">
                    <Link href="/signup">
                    <Button variant="outline"
                    className="text-white border-orange-500 bg-transparent hover:bg-orange-500 hover:text-black rounded-lg">
                        Sign Up
                    </Button>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default Navbar