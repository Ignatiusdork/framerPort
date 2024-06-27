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
        After my time at the university, majoring in{" "}
        <span className="font-medium">Environmental Science and Engineering</span>, I decided to pursue my
        passion for programming. I researched and learned by myself becoming self-taught{" "}
        <span className="font-medium">in software development technologies</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My learning core stack paths
        are{" "}
        <span className="font-medium">
          PHP, Laravel, MySQL
        </span>
        . I am also familiar with JavaScript and Solidity. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time junior position</span> as a software
        developer.
        </p>

        <p>
        <span className="italic">When I am not coding</span>, I enjoy reading/watching
         war history, listing to music, and hanging out with friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Greek and philosophy</span>. 
        </p>
   </motion.section>
  )
}

export default About
