"use client";

import { NAVBAR_HEIGHT } from '@/lib/constants'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { useGetAuthUserQuery } from '@/state/api';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'aws-amplify/auth';
import { Bell, MessageCircle, Plus, Search } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { SidebarTrigger } from './ui/sidebar';


const Navbar = () => {

    const { data: authUser, isLoading } = useGetAuthUserQuery();
    const router = useRouter();
    const pathname = usePathname();

    const isDashboardPage = pathname.includes("/managers") || pathname.includes("/tenants");

    const handleSignOut = async () => {
        await signOut();
        window.location.href = "/";
    }

  return (
    <div
        className ="fixed top-0 left-0 w-full z-50"
        style = {{height: `${NAVBAR_HEIGHT}px`, boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}
    >
        <div className="flex justify-between items-center w-full py-3 px-8 text-white" style={{ backgroundColor: '#27272a', borderBottom: 'none' }}>
            <div className="flex items-center gap-4 md:gap-6">
            {isDashboardPage && (
                    <div className = "md:hidden">
                        <SidebarTrigger />
                    </div>
                )}
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
                    {authUser ? (
                        <>
                            <div className="relative hidden md:block">
                                <MessageCircle className="w-6 h-6 cursor-pointer text-white hover:text-gray-400" />
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full"></span>
                            </div>
                             <div className="relative hidden md:block">
                                <Bell className="w-6 h-6 cursor-pointer text-white hover:text-gray-400" />
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full"></span>
                            </div>

                            <DropdownMenu>
                                <DropdownMenuTrigger className = "flex items-center gap-2 focus:outline-none">
                                <Avatar>
                                    <AvatarImage src={authUser.userInfo?.image} />
                                    <AvatarFallback className = "bg-gray-600">
                                    {authUser.userInfo?.name?.[0]?.toUpperCase() || authUser.userRole?.[0]?.toUpperCase()}
                                    </AvatarFallback>
                                    
                                </Avatar>
                                  {!isLoading && (authUser?.userInfo?.name || authUser?.cognitoInfo?.username) && (
                                    <p className = "text-gray-200 block whitespace-nowrap">
                                        {authUser.userInfo?.name || authUser.cognitoInfo?.username}
                                    </p>
                                  )}
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className = "bg-white text-black">
                                    <DropdownMenuItem className= 'cursor-pointer hover:!bg-black hover:!text-gray-100 font-bold'
                                    onClick={()=> 
                                        router.push(
                                            authUser.userRole?.toLowerCase() === "manager"
                                            ? "/managers/properties"
                                            : "/tenants/favorites",
                                            {scroll: false}
                                        )
                                    }>
                                        Go to Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className = "bg-gray-200" />
                                    <DropdownMenuItem className= 'cursor-pointer hover:!bg-black hover:!text-gray-100 font-bold'
                                    onClick={()=> 
                                        router.push(
                                            `/${authUser.userRole?.toLowerCase()}s/settings`,
                                            {scroll: false}
                                        )
                                    }>
                                        Settings
                                    </DropdownMenuItem>

                                    <DropdownMenuItem className= 'cursor-pointer hover:!bg-black hover:!text-gray-100 font-bold'
                                    onClick={handleSignOut}
                                    >
                                        Sign Out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <>
                            <Link href="/signin">
                                <Button variant="outline"
                                    className="text-white border-white bg-transparent hover:bg-white hover:text-black rounded-lg">
                                    Sign In
                                </Button>
                            </Link>
                            <Link href="/signup">
                                <Button variant="outline"
                                    className="text-white border-orange-500 bg-transparent hover:bg-orange-500 hover:text-black rounded-lg">
                                    Sign Up
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
        </div>
    </div>
  )
}

export default Navbar