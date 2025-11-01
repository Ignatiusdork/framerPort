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
        passion for programming. I researched and learned{" "}
        <span className="font-medium">software development and have a fair knowledge on blockchain tech and it's security</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stacks
        are{" "}
        <span className="font-medium">
          PHP, Laravel, MySQL
        </span>
        . I'm also familiar with javaScript and solidity. I am open to
        learning new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time mid role position</span> as a software
        developer.
        </p>

        <p>
        <span className="italic">When I am not coding</span>, I enjoy reading/watching
         about war history, listing to music, and hanging out with friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning {" "}
        <span className="font-medium">Greek and Philosophy</span>. 
        </p>
   </motion.section>
  )
}

export default About
