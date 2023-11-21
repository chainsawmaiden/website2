import React from 'react'

import { Metadata } from 'next'
import Lnk from '@/components/lnk'
import ImageModal from '@/components/imageModal'
import Gallery from '@/components/gallery'
import ProjectOverview from '@/components/projectOverview'

import colorLogo from '@/public/criterion/criterion-2.png'
import oldCriterion1 from '@/public/criterion/criterion-old-1.jpg'
import oldCriterion2 from '@/public/criterion/criterion-old-2.jpg'
import criterionText from '@/public/criterion/text.png'

import palette from '@/public/criterion/palette.png'

import proposal1 from '@/public/criterion/proposal-1.png'
import proposal2 from '@/public/criterion/proposal-2.png'
import proposal3 from '@/public/criterion/proposal-3.png'
import proposal4 from '@/public/criterion/proposal-4.png'
import proposal5 from '@/public/criterion/proposal-5.png'
import proposal6 from '@/public/criterion/proposal-6.png'
import Break from '@/components/break'

const gallery0 = [colorLogo] as const;
const gallery1 = [oldCriterion1, oldCriterion2] as const;
const gallery2 = [criterionText] as const;
const gallery3 = [palette] as const;
const gallery4 = [proposal1, proposal2, proposal3, proposal4, proposal5, proposal6] as const;

export const metadata: Metadata = {
  title: 'Criterion Cinemas - Aditya Das',
  description: 'Rebranding of Criterion Cinemas by Aditya Das.'
}

export default function Page() {
  return (
    <>
      <ProjectOverview
        title='Project: Criterion Cinemas'
        tagline='Breathing new life into a dead movie theater.'
        timeline='Oct 2023 - Nov 2023'
        team='Aditya Das (just me)'
        role='Designer'
        tools='Adobe Illustrator, Figma'
        skills='Graphic Design, Branding, Identity'>
        <>
          <p><span className='lf '>OVERVIEW: </span>Student work for my ART 132: Introduction to Graphic Design class. The project was the first half of an assignment to rebrand a public space in New Haven, CT. I chose the now-extinct Criterion Cinemas in New Haven, an indie movie theater that was bought by Bow Tie Cinemas at the turn of the century, before eventually being shut down. My goal was to revitalize the branding of an obsolete movie theater so that it could appeal to younger generations of movie-goers, many of which have found a newfound love for movies.</p>
          <ul className='list-inside list-disc'>
            <li>How do I create a logo that appeals to younger audiences while maintaining an indie movie theater?</li>
          </ul>
          <p>This project culminated in me choosing a logo, color palette, and a new typeface for Criterion Cinemas.</p>
        </>
      </ProjectOverview>

      <Break />

      <Gallery cols='sm:grid-cols-1' caption='Final color logo of the movie theater.'>
        {gallery0.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-screen'/>)}
      </Gallery>

      <Break />

      <p><span className='lf '>THE LOGO: </span>To give a modern spin on cinematic iconography, I overlaid three "movie screens" on top of each other. The slight, uneven rotation of each screen represents how the movie theater is breaking from the mold (and it's own past branding) and trying something new and interesting. The additive color mixing also references how color projections work while also symbolizing that the movie theater is a space for people from all backgrounds to gather and meet one another--an emphasis on community that wasn't accentuated in the past branding. If you're curious, here's the past branding for the theater:</p>

      <Break />

      <Gallery cols='sm:grid-cols-2' caption='Strangely, there is no official logo of the theater on any website that I could find. And whatever Criterion Cinemas logo there was before that is long gone.'>
        {gallery1.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-screen'/>)}
      </Gallery>

      <Break />

      <p>I mean sure, it's a abstraction of a bow tie. But it fails to represent the inclusive and independent space that the theater had become to many New Haven residents.</p>

      <Break />

      <Gallery cols='sm:grid-cols-1'>
        {gallery2.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-[20rem]'/>)}
      </Gallery>

      <Break />

      <p><span className='lf '>TYPEFACE: </span>Helvetica Neue felt like the perfect font to represent this new theater. It's a font that is tied with a lot of rich history and was at its peak in the 20th century, reflecting the historical significance of Criterion Cinemas while still being a sleek and modern font.</p>

      <Break />

      <Gallery cols=''>
        {gallery3.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <Break />

      <p><span className='lf '>PALETTE: </span>Inspired by Polaroid and Sony, I opted to have a mainly black-and-white color palette with accents of color as needed. Considering that most promotional material for the theater would typically have screencaps of movies, the vibrant colors from that material could easily do most of the talking.</p>,

      <Break />

      <Gallery cols='sm:grid-cols-3' caption='The full proposal.'>
        {gallery4.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <Break />

      <Lnk href='/projects/roboticarm'>Next Project →</Lnk>

      <Break />
    </>
  )
}