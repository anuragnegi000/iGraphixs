"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsDiscord, BsLinkedin } from "react-icons/bs"
import SocialMedia from './contact/social-media';
import { TextGenerateEffectDemo } from './MovingText';
import { TypewriterEffectSmoothDemo } from './HeroText';

export default function Intro() {
    return (
        <section className='mb-28 max--w-[50rem] text-center sm:mb-0'>
           
         
           

            <motion.div className='flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    duration: 1,
                    stiffness: 125,
                    delay: 0.5
                }}
            >
                <Link href="#contact" className='flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'>Contact us here
                    <BsArrowRight />
                </Link>

                <Link href="#about" className='flex items-center gap-2 py-3 text-black transition bg-white rounded-full outline-none px-7 focus:scale-110 hover:scale-110 hover:bg-white active:scale-105'>Who we are?
                    <BsArrowRight />
                </Link>
                <a href="" className='flex items-center gap-2 p-4 text-gray-700 transition bg-white rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105'>
                    <BsLinkedin />
                </a>
                <a href="https://discord.gg/EyBCWSH8" className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.20rem] rounded-full outline-none focus:scale-110 hover:scale-110  hover:bg-white active:scale-105 transition'>
                    <BsDiscord />
                </a>
            </motion.div>

            

        </section>
        
    );
    
}
