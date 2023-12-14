import React from 'react'

import { Metadata } from 'next'
import Lnk from '@/components/lnk'
import ImageModal from '@/components/imageModal'
import Gallery from '@/components/gallery'
import ProjectOverview from '@/components/projectOverview'

import collapsed1 from '@/public/popcorn/collapsed-1.png'
import collapsed2 from '@/public/popcorn/collapsed-2.png'
import exteriorFront from '@/public/popcorn/exterior-front.png'
import exteriorBack from '@/public/popcorn/exterior-back.png'
import fullSpread from '@/public/popcorn/full-spread.png'
import opening1 from '@/public/popcorn/opening-1.png'
import opening2 from '@/public/popcorn/opening-2.png'
import openingGif from '@/public/popcorn/opening-gif.gif'
import semiOpen from '@/public/popcorn/semi-open.png'
import stacked from '@/public/popcorn/stacked.png'
import layout1 from '@/public/popcorn/layout-1.png'
import layout2 from '@/public/popcorn/layout-2.png'
import closingGif from '@/public/popcorn/closing-gif.gif'

import moonriseMagazine from '@/public/popcorn/title-card.png'

import id1 from '@/public/id-1.jpg'
import id2 from '@/public/id-2.jpg'
import id3 from '@/public/id-3.jpg'
import id4 from '@/public/id-4.jpg'

import review1 from '@/public/popcorn/review-1.png'
import review2 from '@/public/popcorn/review-2.png'
import review3 from '@/public/popcorn/review-3.png'
import Break from '@/components/break'
import Accent from '@/components/accent'
import Image from 'next/image'
import MiniTitle from '@/components/miniTitle'
import SectionTitle from '@/components/sectionTitle'

const firstSpread = [moonriseMagazine] as const;

const gallery0 = [layout1, layout2] as const;
const idgallery = [id1, id2, id3, id4] as const;
const gallery1 = [exteriorFront, exteriorBack] as const;
const gallery2 = [collapsed1, opening2] as const;
const gallery3 = [semiOpen, opening1] as const;
const gallery4 = [layout2] as const;
const gallery5 = [review1, review2, review3] as const;
const gallery6 = [collapsed2, stacked] as const;
const gallery7 = [openingGif, closingGif] as const;

export const metadata: Metadata = {
  title: 'Popcorn* Mag - Aditya Das',
  description: 'Popcorn* Magazine design by Aditya Das'
}

export default function Page() {
  return (
    <>
      <ProjectOverview
        title='Project: Popcorn* Magazine'
        tagline='Designing a youthful magazine in three dimensions.'
        timeline='Oct 2023 - Nov 2023'
        team='Aditya Das (just me)'
        role='Designer'
        tools='Adobe Suite, Figma'
        skills='Publication, Graphic Design'>
        <>
          <p><span className='lf '>OVERVIEW: </span>Student work for my ART 132: Introduction to Graphic Design class. The project was the second half of an assignment to rebrand a public space in New Haven, CT. I chose the now-extinct Criterion Cinemas in New Haven, an indie movie theater that was bought by Bow Tie Cinemas at the turn of the century, before eventually being shut down. My goal was to revitalize the branding of an obsolete movie theater so that it could appeal to younger generations of movie-goers, many of which have found a newfound love for movies. Read a bit more in my <Lnk href='/projects/criterion'>Criterion Cinemas Rebranding</Lnk> write-up.</p>
          <ul className='list-inside list-disc'>
            <li>How do I create a youthful magazine that reflects a "new beginning" for Criterion Cinemas?</li>
            <li>How do I create a unique publication layout that would still be accessible for readers?</li>
          </ul>
          <p>The final product is a magazine presented in a "popcorn box" format that people can unfold to read!</p>
        </>
      </ProjectOverview>

      <Break />

      <Gallery cols='sm:grid-cols-2'>
        {gallery0.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <Break />

      <MiniTitle>01: IDEATION</MiniTitle>
      <SectionTitle>Youthful, Expressive, and Fun!</SectionTitle>
      <p>From the very get-go, I knew I wanted this magazine to appeal to younger generations. After all, magazines have had a resurgence in popularity amongst the youth alongside other "retro items" like digital cameras.</p>

      <Gallery cols='sm:grid-cols-4' caption='Some of my personal favorite i-D covers.'>
        {idgallery.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-[20rem]'/>)}
      </Gallery>

      <p>When brainstorming different layouts for this project, I found that many youthful magazines have a very "gimmicky" quality to them. One of the best successful examples of a gimmicky cover creating an unmistakable magazine "brand" is <Lnk href='https://www.theguardian.com/theobserver/2001/mar/25/features.magazine37'>i-D Magazine</Lnk>, which matches the youthful quality I wanted to acheive with my magazine.</p>

      <p>So, what kind of fun magazine could I make for Criterion Cinemas?</p>
      
      <Break />

      <MiniTitle>02: THE MAGAZINE</MiniTitle>
      <SectionTitle>A Three-Dimensional Magazine?</SectionTitle>

      <Gallery cols='sm:grid-cols-1' caption='Introducing Popcorn* Magazine.'>
        {firstSpread.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>
      
      <p>This idea resonated with me for 3 reasons:</p>
      <ol className='list-inside list-decimal'>
        <li>It's instantly recognizable. What other magazine is presented as a three-dimensional popcorn box?</li>
        <li>It straddles the boundary between modern and retro that us Gen-Z kids love best. The red and white popcorn box is an icon reminiscent "golden age of cinema", but very few theaters still serve popcorn in these kind of boxes (if you don't believe me, go to your local Regal or AMC).</li>
        <li>When unfolded, it creates a large spread that almost looks like an arc. This drives home the magazine's goal to "break the mold": it doesn't give into a standard rectangular layout, but rather folds into something more promising!</li>
      </ol>
      <p className='italic w-full'>So how does this magazine work?</p>

      <Break />

      <MiniTitle>03: THE EXTERIOR</MiniTitle>

      <Gallery cols='sm:grid-cols-2'>
        {gallery1.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <p>When first presented, the magazine will be shaped as a popcorn box! The exteriors are all screencaps from <span className='italic'>Moonrise Kingdom</span>. A sticker of a popcorn image (with a repeated caption of "eat me") holds the magazine together. The sticker can only be peeled off once, the same way popcorn can only be eaten once, fitting into theme.</p>

      <Break />
      
      <MiniTitle>04: THE STICKER</MiniTitle>

      <Gallery cols='sm:grid-cols-2'>
        {gallery2.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <p>To take off the sticker and open the magazine, the magazine has to be collapsed in order to open the flap. The orientation is made clear by the screencaps, which piece together to create one full shot on the magazine. The "info" text then hints at the reader to rotate the magazine 90 degrees to open.</p>

      <Break />
      
      <MiniTitle>05: GUIDING THE USER</MiniTitle>

      <Gallery cols='sm:grid-cols-2'>
        {gallery3.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <p>As the reader begins to unfold the magazine, they are faced with their first layout, which showcases the major feature film of the week (for this "volume", it was <span className='italic'>Moonrise Kingdom</span>) alongside the list of all movies screening in the theater that week.</p>
      
      {false && <p>I wanted the advertisement of attending the cinema to be subtle, since younger audiences are very good at picking up and dismissing blatant advertisements. However, to open the magazine, users are forced to interact and acknowledge the page with the screenings. Overall, it not only becomes a cool graphic element, but one that quietly offers a call to action to the reader.</p>}

      <Break />

      <MiniTitle>06: THE FULL SPREAD</MiniTitle>

      <Gallery cols='sm:grid-cols-1 ' caption="Why these specific movies? They're all ones that my friends and I watched within our first month of coming to Yale.">
        {gallery4.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <p>When the reader finishes opening up the full magazine, they are greeted with a massive spread of all of the movies. There is very little emphasis on actual small text, as I wanted the screencaps to do most of the "advertising" and entice the reader to visit the theater to watch them.</p>

      <Gallery cols='sm:grid-cols-1' caption='My favorite thing about Letterboxd reviews is that they are usually extremely short and make no meaningful critiques of the movie itself, but are still funny enough to convince me to watch them.'>
        {gallery5.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <p>Overlaid on top of these movies are Letterboxd (a site/app beloved by the younger movie-watching crowds) reviews of each movie. From personal experience, most Gen-Z students watch movies through word of mouth or online reviews, and so I wanted to reflect that within the spread! Adding these reviews allowed me to create subtle visual barriers between each "movie section" while also adding more humor to the magazine.</p>

      <Break />

      <MiniTitle>07: FINAL TOUCHPOINTS</MiniTitle>

      <p>The magazine can be folded in on itself to become easily portable. Or, if you're a collector and want to keep multiple editions of the magazine, you can stack the unopened magazines on top of each other!</p>

      <Gallery cols='sm:grid-cols-2' caption='What kind of reader are you?'>
        {gallery6.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-[35rem]'/>)}
      </Gallery>

      <Gallery cols='sm:grid-cols-2' caption='Some badly recorded GIFs of me playing around with the magazine.'>
        {gallery7.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-screen'/>)}
      </Gallery>

      <Break />

      <Lnk href='/projects/criterion'>Next Project →</Lnk>

      <Break />

    </>
  )
}