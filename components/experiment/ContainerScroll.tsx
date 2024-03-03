"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
             Welcome in the world of professionals <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                iGraphixs
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "IGraphixs",
    designation: "Founder, Algochurn",
    image: "/iGraphixs_full.png",
    badge: "Live",
  },
  {
    name: "Arpit",
    designation: "Founder, booglyBB",
    image: "/iGraphixs_full.png",
    badge: "CEO",
  },
  {
    name: "Uday",
    designation: "Founder, Clash Nation",
    image: "/iGraphixs_full.png",
    badge: "CEO",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc",
    image: "/iGraphixs_full.png",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Data Scientist, DataWorks",
    image: "/iGraphixs_full.png",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "UX Designer, DesignHub",
    image: "/iGraphixs_full.png",
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    designation: "CTO, FutureTech",
    image: "/iGraphixs_full.png",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "CEO, StartUp",
    image: "/iGraphixs_full.png",
  },
  {
    name: "James Wilson",
    designation: "DevOps Engineer, CloudNet",
    image: "/iGraphixs_full.png",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "Marketing Manager, MarketGrowth",
    image: "/iGraphixs_full.png",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Frontend Developer, WebSolutions",
    image: "/iGraphixs_full.png",
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "/iGraphixs_full.png",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "/iGraphixs_full.png",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "/iGraphixs_full.png",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "/iGraphixs_full.png",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "/iGraphixs_full.png",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "/iGraphixs_full.png",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "/iGraphixs_full.png",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "/iGraphixs_full.png",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "/iGraphixs_full.png",
    badge: "Developer",
  },
];
