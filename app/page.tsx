"use client"

import About from '../components/about'
import Header from '@/components/header'
import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'


import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
     
      <Intro/>
      
      <SectionDivider/>
      <About/>
    
    </main>
  )
}
