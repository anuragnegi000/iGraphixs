"use client";

import React from "react";
// import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
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
      {/* <SectionHeading>About me</SectionHeading> */}
      <h1 className="text-3xl ">About Us </h1>
      <p className="mb-3">
      We are a team of passionate individuals who are
       dedicated to providing the best possible service to
        our customers. Our team is made up of experienced
         professionals who are committed to ensuring that
          every detail of our services is taken care of.
           <span className="font-medium">We take pride in our work and are committed to</span>
            delivering high-quality
       results that meet the needs of our <span className="underline">customers.{" "}</span> 
        
       <p className="mb-3">
  At iGraphic, we harness the power of cutting-edge frameworks and technologies to deliver top-notch solutions. Our expertise spans across various domains, with a focus on <span className="font-medium">full-stack web development</span>. We thrive on the challenges of <span className="italic">programming</span> and the thrill of problem-solving. Every project is an opportunity to showcase our skills and deliver innovative solutions. Our core stack includes <span className="font-medium">React, Next.js, Node.js,</span> and <span className="font-medium">MongoDB</span>, ensuring robust and scalable applications that meet the demands of today's digital landscape.
</p>

        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
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