import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecurveImg from "@/public/ecurve.png";
import mortscoinImg from "@/public/mortscoin.png";
import pinpointImg from "@/public/pinpoint.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "LabourX",
    location: "Sydney, Australia ",
    description:
      "I am currently on LabourX as a freelancer for software development, writing, and also open to full-time roles and opportunities. My stack includes PHP, Laravel, MySQL, HTML, CSS. I am also working to upskill to full stack. ",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - present",
  },
  {
    title: "Web3 Development",
    location: "Houston, TX",
    description:
      "Contributed to the front-end development/desgin of a decentralized game site(dApps) on the Hedera Hashgraph, leveraging the hedera SDKs and tools to achieve an optimal performance of the applications.",
    icon: React.createElement(FaReact),
    date: "Mar - May 2023",
  },
  {
    title: "AptLearn Certification",
    location: "Remote",
    description:
      "Learned about the fundamentals of technical writing, Learnt from scratch the basic terminologies in technical writing.",
    icon: React.createElement(LuGraduationCap),
    date: "2023, July",
  },
  {
    title: "SINSO Product-Research Writer",
    location: "Remote",
    description:
      "Wrote blockchain and Web3 research articles for SINSO's products, distilling complex concepts into engaging content.",
      icon: React.createElement(FaReact),
    date: "2022, July",
  },

] as const;

export const projectsData = [
  {
    title: "Check Github For Project Links",
    description:
      "check my pinned github repos for links to my different worked on projects",
    tags: ["JSON/GraphQL", "JavaScript", "ArweaveJS", "Vite", "Svelte", "Tailwind", "Mapbox"],
    imageUrl: pinpointImg,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "Laravel",
  "MySQL",
  "JavaScript",
  "Vite",
  "Git",
  "Tailwind",
  "Solidity",
  "Hardhat",
  "Ethers.js",
  "GraphQL|Sub-Graph",
] as const