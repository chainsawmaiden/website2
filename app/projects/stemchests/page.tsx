import React from 'react'

import { Metadata } from 'next'
import Lnk from '@/components/lnk'

import stemchests from '@/public/stemchests.png'
import stemchestsLogo from '@/public/stemchests-logo.png'
import stemchestsReviews from '@/public/stemchest-reviews.png'
import stemchestsCart from '@/public/stemchests-cart.png'
import ImageModal from '@/components/imageModal'

import stemchestsWorkshop from '@/public/stemchests-workshop.png'

import instr1 from '@/public/stemchests-instruction/01.png'
import instr2 from '@/public/stemchests-instruction/02.png'
import instr3 from '@/public/stemchests-instruction/03.png'
import instr4 from '@/public/stemchests-instruction/04.png'
import instr5 from '@/public/stemchests-instruction/05.png'
import instr6 from '@/public/stemchests-instruction/06.png'
import instr7 from '@/public/stemchests-instruction/07.png'
import instr8 from '@/public/stemchests-instruction/08.png'
import instr9 from '@/public/stemchests-instruction/09.png'
import instr10 from '@/public/stemchests-instruction/10.png'
import instr11 from '@/public/stemchests-instruction/11.png'
import instr12 from '@/public/stemchests-instruction/12.png'
import instr13 from '@/public/stemchests-instruction/13.png'
import instr14 from '@/public/stemchests-instruction/14.png'
import instr15 from '@/public/stemchests-instruction/15.png'

import stemchestsHeader from '@/public/stemchests-header.png'

import stemchestsWireframe from '@/public/stemchests-wireframe.png'
import stemchestsWeb from '@/public/stemchests-web-1.png'

const gallery1 = [stemchests] as const;
const gallery2 = [stemchestsLogo, stemchestsCart, stemchestsWorkshop] as const;
const gallery3 = [instr1, instr2, instr3, instr4, instr5, instr5, instr6, instr7, instr8, instr9, instr10, instr11, instr12, instr13, instr14, instr15] as const;
const gallery4 = [stemchestsWireframe, stemchestsWeb] as const;
const gallery5 = [stemchestsHeader] as const;

import Gallery from '@/components/gallery'
import ProjectOverview from '@/components/projectOverview'
import Break from '@/components/break'
import Accent from '@/components/accent'
import ImageWithText from '@/components/imageWithText'

export const metadata: Metadata = {
  title: 'STEMChests - Aditya Das',
  description: 'STEMChests product design by Aditya Das.'
}

export default function Page() {
  return (
    <>
      <ProjectOverview
        title='Project: STEMChests'
        tagline='Creating accessible science kits for elementary schoolers.'
        timeline='Feb 2022 - Aug 2023'
        team='Aditya Das (just me)'
        role='Founder'
        tools='Adobe Suite, Procreate, Shopify/Sanity'
        skills='Product Design, Branding, Identity, UX/UI'>
        <>
          <p><span className='lf '>OVERVIEW: </span>Branding and product design I made for my non-profit, <Lnk href='https://www.stemchests.com/' >STEMChests</Lnk>. The non-profit model revolved around selling affordable, low-cost science kits and using all profits to donate more kits to students in underprivileged communities. In the course of a year, we managed to go from zero name recognition or customer base to over $3,600 crowdfunded online/in-person and over 1000 kits distributed. We currently have an in-person conversion rate of 37%.</p>
          <ul className='list-inside list-disc'>
            <li>How do I create a trusted brand that can earn both sales and donations?</li>
            <li>How do I create a recognizable and appealing physical product that can be easily handmade on a low budget?</li>
            <li>How do I ensure that my product is accessible for young elementary school students?</li>
          </ul>
          <p>In order to streamline our branding and our product, I considered the target buyers/donors. Buyers would typically be middle-aged parents that are trying to find ways to help their child engage with STEM through interactive projects. For this buyer, the charitable cause is icing on the cake, while the low-cost and appealing brand are the main selling points ($10 for a science kit? And the profits go to charity? Of course!). They would typically buy these kits <span className='italic'>in-person.</span> Donors would typically be teachers or parents that are passionate/involved with community service and care about equitable education. They would typically donate <span className='italic'>online.</span></p>
        </>
      </ProjectOverview>

      <Break />

      <Gallery cols='sm:grid-cols-1'>
        {gallery1.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-[80vh]'/>)}
      </Gallery>

      <Break />

      <Accent>We needed packaging for the box to cost less than $1. The lower the cost, the better.</Accent>
  
      <Break />
      <p><span className='lf '>THE BOX: </span>The biggest two constraints for designing the boxes were an extremely tight budget constraint (we wanted our product to cost less than $5 total for both the box itself and the parts inside, meaning that the box and any decorations would have to cost less than $1) and the need for us to make every single product by hand (a.k.a. no factories). With both of these extreme constraints, I opted for a simple (and cheap) design that emphasized the handmade quality of the boxes. Taking inspiration from Amazon's effective packaging and the unintentional green-brown color harmony between our STEMChests logo logo and the box, I was able to create an easily recognizable product exterior that cost only $.43!</p>
      <Break />

      <ImageWithText img={stemchestsReviews}>
        
        <p>After this, I gave 25 "test boxes" to families from various different backgrounds and asked them to provide feedback for the kit, which helped me assess user pain points and helped me make some finishing touches to the instruction booklets and product to make it more accessible.</p>
      </ImageWithText>

      <Break />

      <Gallery cols='sm:grid-cols-3' caption='Our logo in action!'>
        {gallery2.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-[20rem]'/>)}
      </Gallery>

      <Break />

      <p><span className='lf '>LOGO & BRANDING:</span> STEMChests started from nothing, and my goal was to create a brand that would be instantly trustworthy. Since we were a team high school students who carefully assembled each kit by hand, I decided to give our products a more "hand-made", less corporate feel. I incorporated various illustrations, vibrant colors, and playful (yet legible) fonts to represent our non-profit.</p>

      <Break />

      <Gallery cols='sm:grid-cols-2 lg:grid-cols-4' caption='The instruction booklet for the "Balloon Car" project.'>
        {gallery3.map((img, i) => <ImageModal key={i} src={img} />)}
      </Gallery>

      <Break />

      <Accent>We needed children from ages 5-10 to understand the kits with little to no help from adults.</Accent>

      <Break />

      <p>We also strived to make our kits accessible to all students regardless of background or age. We wanted young students to be able to use the kits on their own, which led to a <span className='italic'> lot</span> of consulting with elementary school science teachers, toy store owners, and families to create a product and brand that would be appealing and understandable by children. Overall, this resulted in big font sizes, detailed and clear illustrations, and very easy-to-follow instructions. This took a lot of revision, consulting with teachers and toy makers, and testing with families to get right.</p>

      <Break />

      <Gallery cols='sm:grid-cols-1'>
        {gallery4.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <Break />

      <p><span className='lf '>WEB: </span>Since STEMChests did not have nearly enough name recognition or platform to attract buyers online, I structured the website to primarily provide legitimacy for donors and potential partners, rather than function as an e-commerce website. Since I was using a free Shopify web theme, I was severely limited in terms of web design and layout. However, through the color palette and text, I was able to still have the final product synergize with the STEMChests branding. You can find the current STEMChests website <Lnk href='https://www.stemchests.com/'>here</Lnk>.</p>

      <Break />

      <Gallery cols='sm:grid-cols-1'>
        {gallery5.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <Break />

      <p>A few months ago, a customer came up to me at a workshop event and told me that they remembered me selling them a science kit a year before and that she recognized us from the boxes. It made me proud that I had created branding unique enough to be remembered for over a year, at least by one person :)</p>

      <Break />

      <Lnk href='/projects/popcorn'>Next Project →</Lnk>

      <Break />
    </>
  )
}