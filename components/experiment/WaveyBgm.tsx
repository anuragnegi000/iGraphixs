"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background"
import { TypewriterEffectSmoothDemo } from "../HeroText";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl pb-40 mx-auto">
      <p className="text-2xl font-bold text-center text-white md:text-4xl lg:text-7xl inter-var">
      <TypewriterEffectSmoothDemo/>
      </p>
      <p className="mt-4 text-base font-normal text-center text-white md:text-lg inter-var">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
  );
}
