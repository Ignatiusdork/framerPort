'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"

import { useSectionInView } from '@/lib/hooks'

function About() {
  const {ref} = useSectionInView('About');
 
  return (
   <motion.section 
        ref={ref}
        className='mb-28 max-w-[45rem] 
        text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.175}}
        id="about"
        >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
        After my time in the Univeristy, major in{" "}
        <span className="font-medium">Enviromental Science and Engineering</span>, I decided to pursue my
        passion for programming. I researched and learned myself becoming self-taught{" "}
        <span className="font-medium">in software development and blockchain technologies</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        are{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Solidity
        </span>
        . I am also familiar a little with TypeScript and SQL. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time junior position</span> as a software
        developer.
        </p>

        <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading
        history, watching movies, listing to music, and hanging out with friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Greek and philosophy</span>. I'm also
        learning how to play the guitar.
        </p>
   </motion.section>
  )
}

export default About
