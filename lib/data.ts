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
  {
    title: "Web3 Development",
    location: "Houston, TX",
    description:
      "Contributed to the front-end development/desgin of a decentralized game site(dApps) on the Hedera Hashgraph, leveraging the hedera SDKs and tools to achieve an optimal performance of the applications.",
    icon: React.createElement(FaReact),
    date: "Mar - May 2023",
  },
  {
    title: "LabourX Freelance",
    location: "Sydney, Australia ",
    description:
      "I am currently working as a freelancer for software development, writing, and also open to full-time roles and opportunities. My stack includes React, Next.js, JavaScript, Tailwind. I am also working to upskill to full stack. ",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - present",
  },

] as const;

export const projectsData = [
  {
    title: "PinPoint-Earth",
    description:
      "A geo-location and decentralized blog dapp on ArWeave! Built for exploration, experiences using the decentralized features.",
    tags: ["JSON/GraphQL", "JavaScript", "ArweaveJS", "Vite", "Svelte", "Tailwind", "Mapbox"],
    imageUrl: pinpointImg,
  },
  {
    title: "Mort's Coin",
    description:
      "Your effortless token minter for crafting unique Morts tokens. Seamlessly create, customize, assets on the blockchain.",
    tags: [ "JavaScript", "Solidity", "React", "Next.js", "Ethers.js", "Hardhat", "CSS"],
    imageUrl: mortscoinImg,
  },
  {
    title: "ECDSA Node",
    description:
      "This is a personal project that shows an example of using a client and server to facilitate transfers between different addresses.",
    tags: ["Ethererum-cryptography", "JavaScript", "React", "Vite", "SCSS", "Express", "Node.js"],
    imageUrl: ecurveImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Hardhat",
  "Ethers.js",
  "Wagmi",
  "GraphQL|Sub-Graph",
  "Express",
  "Chainlink",
  "Pinta",
  "Solidity",
  "Framer Motion",
] as const;