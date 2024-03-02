"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export default function Intro() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div className='relative'>
                    <motion.div 
                        initial={{  opacity: 0 ,scale:0}}
                        animate={{opacity: 1,scale:1 }}
                        transition={{ 
                            type:"spring",
                            duration: 1,
                            stiffness:125,
                            delay:0.5
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
        </section>
    );
}
