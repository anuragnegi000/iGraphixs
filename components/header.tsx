"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { links } from '../lib/data';
// import { link } from 'fs';
import Link from 'next/link';
import { Image } from '@nextui-org/react';


const Header = () => {
    return (
        
        <header className='z-[999] relative'>
             <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            stiffness: 125,
                            delay: 0.5
                        }}
                    >
                        <Image
                            src="/iGraphixs_full.png"
                            alt="iGraphixs"
                            width={192}
                            height={192}
                            quality={95}
                            priority={true}
                            className='h-50 rounded-full object-cover border-[0.35rem]shadow-xl'
                        />
                    </motion.div>
            <motion.div className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
                initial={{ y: -100, x: "-50%", opacity: 1 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
                
            </motion.div>
            
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
                    {links.map((link1) => (
                        <motion.li className="flex items-center justify-center h-3/4" key={link1.hash} initial={{y: -100,opacity:0}} animate={{y:0, opacity:1}}>
                            <Link className="flex items-center justify-center w-full px-3 py-3 transition hover:text-gray-950" href={link1.hash}>
                                {link1.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header