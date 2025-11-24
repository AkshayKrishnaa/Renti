"use client";
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] w-full">
        <Image
        src="/landing-call-to-action.jpg"
        alt="Rentify Background Section"
        fill
        className="object-cover"
        sizes="100vw"
        priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
        initial={{opacity:0, y:20}}
        transition={{duration: 0.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Find Your Dream Rental Property
                </h2>
                <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
                    Discover a wide range of rental properties in your desired location.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                    onClick={()=> window.scrollTo({top:0, behavior:"smooth"})}
                    className="inline-block text-black bg-white rounded-lg px-8 py-3 font-semibold hover:bg-gray-200 transition-colors">
                        Search
                    </button>
                    <Link
                    href="/signup"
                    className="inline-block text-white bg-orange-500 rounded-lg px-8 py-3 font-semibold hover:bg-red-600 transition-colors"
                    scroll={false}>
                        Sign Up 
                    </Link>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default CallToActionSection