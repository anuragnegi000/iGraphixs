"use client"

import Boddy from '@/components/FruitsCard'
import About from '../components/about'
import Header from '@/components/header'
import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'


import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

import Group from '@/components/group'
import { StickyScrollRevealDemo } from '@/components/ImageSlider'
import { CardHoverEffectDemo } from '@/components/experiment/CardHover'
import { TracingBeamDemo } from '@/components/experiment/TracingBeam'
import { SVGMaskEffectDemo } from '@/components/experiment/SvgMask'
import { WavyBackgroundDemo } from '@/components/experiment/WaveyBgm'
import {InfiniteMovingCardsDemo} from '@/components/infiniteMovingCard'
import { HeroScrollDemo } from '@/components/experiment/ContainerScroll'
import {BentoGridThirdDemo} from '@/components/bentoGrid'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">


      {/* <Intro /> */}
      <WavyBackgroundDemo/>

      {/* <SectionDivider /> */}
      <HeroScrollDemo/>

      
      {/* <About />   chnage the font color from black to white  */}
      {/* <Group /> */}
      <TracingBeamDemo/>
      <StickyScrollRevealDemo/>
      <InfiniteMovingCardsDemo/>
      <CardHoverEffectDemo/>
      {/* <SVGMaskEffectDemo/> */}
      <BentoGridThirdDemo/>
      
      
     


    </main>
  )
}
