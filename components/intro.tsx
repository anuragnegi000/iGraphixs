"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsDiscord, BsLinkedin } from "react-icons/bs"

export default function Intro() {
    return (
        <section className='mb-28 max--w-[50rem] text-center sm:mb-0'>
            <div className="flex items-center justify-center">
                <div className='relative'>
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
                </div>
            </div>
            <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">iGraphixs is a leading company specializing in graphic design </span>{" "}
                <span className="font-bold">visual effects (VFX), and marketing solutions.</span> with{" "}
                <span className="font-bold">X years</span> of experience Our comprehensive marketing services ensure
                building <span className="italic">strategic promotion</span>. and effective outreach
                <span className="italic"> driving growth and success for our clients.</span>.
            </motion.p>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    duration: 1,
                    stiffness: 125, 
                    delay: 0.5
                }}
            >
                <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  hover:bg-gray-950 active:scale-105 transition'>Contact us here
                    <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>

                <Link href="#about" className='group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  hover:bg-white active:scale-105 transition cursor-pointer'>Who we are?
                    <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
                </Link>

                <a href="" className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'>
                    <BsLinkedin />
                </a>

                <a href="https://discord.gg/EyBCWSH8" className='group bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.20rem] rounded-full  focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'>
                    <BsDiscord/>
                </a>
            </motion.div>

            

        </section>
        
    );
    function checker(){
        console.log("Check");
    }
}
