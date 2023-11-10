import React from 'react'
import Lnk from './lnk'

export default function About() {
  return (
    <section className='pf flex flex-col gap-y-2 w-auto max-w-4xl'>
        <p className='italic'>last updated in Nov 2023</p>
        <p>Hi, I'm Aditya, and welcome to my little space of the internet! I'm an engineer, programmer, and designer based in New Haven, CT, where I study Computing and the Arts at <Lnk href='https://www.yale.edu/' > Yale University '27.</Lnk>
        </p>
        <p>
        As a maker in both digital and physical mediums, I strive to construct experiences that are engaging, creative, and efficient. I'm particularly interested in human-computer interaction and exploring themes of community, sentimentality, and the digital world in my work.
        </p>
        <p>
        Currently, I am a Catalyst Program mentee for the <Lnk href='https://yalecomputersociety.org/#/'>Yale Computer Society</Lnk>, a studio member of <Lnk href='https://designatyale.com/'>Design at Yale</Lnk>, a programmer on the PulseVision AI project, and on the creative teams for <Lnk href='https://17o1records.com/'>17o1 Records</Lnk> and <Lnk href='https://yalespringfling.com/'>Yale Spring Fling</Lnk>. I'm also the founder of <Lnk href='https://stemchests.com/'>STEMChests</Lnk>, a student-run 501(c)(3) non-profit that has designed and distributed over 1,000 science kits to students in my home state of Maryland.
        </p>
        <p>
        In the past, I designed and 3D-printed soft robots at the <Lnk href='https://robotics.umd.edu/'>Maryland Robotics Center at UMD</Lnk> and interned at the <Lnk href='https://www.stern.nyu.edu/'>Stern School of Business at NYU</Lnk> to create low-cost Micro:bit sensors. 
        </p>
    </section>
  )
}
