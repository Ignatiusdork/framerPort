import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'

function Projects() {
  return (
   <section id="projects" className='scroll-mt-28'>
        <SectionHeading>My projects</SectionHeading>
        <div>
            {
                projectsData.map((projects, index) => (
                    <React.Fragment key={index}>
                        <Project {...projects}/>
                    </React.Fragment>
                ))
            }
        </div>
   </section>
  )
}

export default Projects
