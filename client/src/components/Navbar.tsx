"use client";

import { NAVBAR_HEIGHT } from '@/lib/constants'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { useGetAuthUserQuery } from '@/state/api';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'aws-amplify/auth';
import { Plus, Search } from 'lucide-react';

const Navbar = () => {

    const { data: authUser} = useGetAuthUserQuery();
    const router = useRouter();
    const pathname = usePathname();

    const isDashboardPage = pathname.includes("/managers") || pathname.includes("/tenants");

    const handleSignOut = async () => {
        await signOut();
        window.location.href = "/";
    }

  return (
    <div
        className ="fixed top-0 left-0 w-full z-50 shadow-xl"
        style = {{height: `${NAVBAR_HEIGHT}px`}}
    >
        <div className="flex justify-between items-center w-full py-3 px-8 text-white" style={{ backgroundColor: '#27272a' }}>
            <div className="flex items-center gap-4 md:gap-6">
                <Link
                href="/"
                className="cursor-pointer hover:!text-gray-300!"
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
                {isDashboardPage && authUser && (
                    <Button 
                        variant="secondary"
                        className= "md:ml-4 bg-gray-50 text-black hover:bg-amber-500 hover:text-gray-50"
                        onClick={() =>
                            router.push(
                                authUser.userRole?.toLowerCase() === "manager"
                                ? "managers/newproperty"
                                : "/search"
                            )
                        }
                        >
                            {authUser.userRole?.toLowerCase() === "manager" ?(
                                <>
                                <Plus className= "h-4 w-4"/>
                                <span className = "hidden md:block ml-2">Add New Property</span>
                                </>
                            ): (
                                <>
                                    <Search className= "h-4 w-4" />
                                    <span className="hidden md:block ml-2">
                                        Search Properties
                                    </span>
                                </>
                            )}
                        </Button>
                )}
            </div>
               {!isDashboardPage && ( <p className = "hidden md:block" style={{ color: '#e0e0e2' }}>
                    Discover your perfect rental apartment with our advanced search
                </p> )}
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