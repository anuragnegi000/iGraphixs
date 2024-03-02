"use client";

import React from "react";
// import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  //   const { ref } = useSectionInView("About");

  return (
    <motion.section
      //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About us</SectionHeading>

      <p className="mb-3">

        Our diverse range of creative services aims to elevate your brand's visual identity and engagement. From captivating logo designs to compelling branding strategies, we specialize in crafting cohesive brand experiences that resonate with your audience. Our expertise extends to dynamic stream assets, engaging illustrations, and impactful video editing for both short and long-form content. Whether it's bringing your brand story to life through animation or creating eye-catching banners and posters, we thrive on delivering visually stunning solutions.
        <span className="font-medium">We take pride in our work and are committed to</span>
        delivering high-quality
        results that meet the needs of our <span className="underline">customers.{" "}</span>

        <p className="mb-3">
          Additionally, our proficiency in crafting social media posts ensures your brand remains consistently engaging across all platforms. Explore how we can bring your brand vision to life with creativity, passion, and expertise.
        </p>

        <span className="font-medium">
          Branding design, Illustration, Logo Design, Animation
        </span>

      </p>

      <p>

        <p>
          <span className="font-medium">Continuous learning</span> is at the heart of iGraphic. We are dedicated to staying ahead of the curve, constantly exploring and <span className="font-medium">learning new things</span> to push the boundaries of creativity and innovation. Currently, we are diving deep into cutting-edge design trends, exploring emerging technologies, and expanding our skill set to deliver unparalleled solutions to our clients.
        </p>


      </p>
    </motion.section>
  );
}