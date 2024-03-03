"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background"
import { TypewriterEffectSmoothDemo } from "../HeroText";
import { TextGenerateEffect } from "../ui/text-generate-effect";
const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl pb-40 mx-auto">
      <p className="text-2xl font-bold text-center text-white md:text-4xl lg:text-7xl inter-var">
      <TypewriterEffectSmoothDemo/>
      </p>
      <p className="mt-4 text-base font-normal text-center text-white md:text-lg inter-var">
    <TextGenerateEffect words={words}/>
      </p>
    </WavyBackground>
  );
}
