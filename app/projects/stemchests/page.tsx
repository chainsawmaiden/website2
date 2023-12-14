import React from 'react'

import { Metadata } from 'next'
import Lnk from '@/components/lnk'

import iconDesignNib from '@/public/icons/design-nib.svg'
import iconGraphUp from '@/public/icons/graph-up.svg'

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

import workshop2 from '@/public/stemchests-workshop2.jpg'
import workshop4 from '@/public/stemchests-workshop4.jpg'
import workshop5 from '@/public/stemchests-workshop5.jpg'


const workshopGallery = [workshop2, workshop4, workshop5]
const gallery1 = [stemchests] as const;
const gallery2 = [stemchestsLogo, stemchestsCart, stemchestsWorkshop] as const;
const gallery3 = [instr1, instr2, instr3, instr4, instr5, instr6, instr7, instr8, instr9, instr10, instr11, instr12, instr13, instr14, instr15] as const;
const gallery4 = [stemchestsWireframe, stemchestsWeb] as const;
const gallery5 = [stemchestsHeader] as const;

import Gallery from '@/components/gallery'
import ProjectOverview from '@/components/projectOverview'
import Break from '@/components/break'
import Accent from '@/components/accent'
import ImageWithTextRight from '@/components/imageWithTextRight'
import MiniTitle from '@/components/miniTitle'
import SubsectionTitle from '@/components/sectionTitle'
import IconBox from '@/components/iconBox'
import IconSection from '@/components/iconSection'

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
          <p><span className='bf '>OVERVIEW: </span>Branding and product design I made for my non-profit, <Lnk href='https://www.stemchests.com/' >STEMChests</Lnk>. The non-profit model revolved around selling affordable, low-cost science kits and using all profits to donate more kits to students in underprivileged communities. In the course of a year, we managed to go from zero name recognition or customer base to over $3,600 crowdfunded online/in-person and over 1000 kits distributed. We currently have an in-person conversion rate of 37%.</p>
          <ul className='list-inside list-disc'>
            <li>How do I create a trusted brand that can earn both sales and donations?</li>
            <li>How do I create a recognizable and appealing physical product that can be easily handmade on a low budget?</li>
            <li>How do I ensure that my product is accessible for young elementary school students?</li>
          </ul>

        </>
      </ProjectOverview>

      <Break />

      <Gallery cols='sm:grid-cols-1'>
        {gallery5.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <Break />

      <MiniTitle>01: USERS</MiniTitle>
      <SubsectionTitle>Understanding Our Consumers</SubsectionTitle>
      <p>In order to streamline our branding and our product, I considered the target buyers/donors. Buyers would typically be middle-aged parents that are trying to find ways to help their child engage with STEM through interactive projects. For this buyer, the charitable cause is icing on the cake, while the low-cost and appealing brand are the main selling points ($10 for a science kit? And the profits go to charity? Of course!). They would typically buy these kits <span className='italic'>in-person.</span> </p>
      
      <p>Donors would typically be teachers or parents that are passionate/involved with community service and care about equitable education. After conducting more and more workshop sessions, they typically would also be people who had kids that were too old to use the kits themselves. They would typically donate <span className='italic'>online.</span>, which meant that I would need to tailor a website for that specific use.</p>
      
      <Gallery cols='sm:grid-cols-3' caption='As we continued to host more workshop events, I continued to get a better understanding of how to best present our product to families and donors alike.'>
        {workshopGallery.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-[40rem]'/>)}
      </Gallery>

      <Break />

      <MiniTitle>02: PACKAGING</MiniTitle>
      <SubsectionTitle>Designing The Box</SubsectionTitle>
      <p>So, how do we design a box to appeal to children and parents alike?</p>

      <Gallery cols='sm:grid-cols-1'>
        {gallery1.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-[80vh]'/>)}
      </Gallery>

      <Accent>We needed packaging for the box to cost less than $1. The lower the cost, the better.</Accent>
  
      <p>The biggest two constraints for designing the boxes were an extremely tight budget constraint (we wanted our product to cost less than $5 total for both the box itself and the parts inside, meaning that the box and any decorations would have to cost less than $1) and the need for us to make every single product by hand (a.k.a. no factories). With both of these extreme constraints, I opted for a simple (and cheap) design that emphasized the handmade quality of the boxes. Taking inspiration from Amazon's effective packaging and the unintentional green-brown color harmony between our STEMChests logo logo and the box, I was able to create an easily recognizable product exterior that cost only $.43!</p>

      <Gallery cols='sm:grid-cols-3 lg:grid-cols-5' caption='The instruction booklet for the "Balloon Car" project.'>
        {gallery3.map((img, i) => <ImageModal key={i} src={img} />)}
      </Gallery>

      <Accent>We needed children from ages 5-10 to understand the kits with little to no help from adults.</Accent>

      <p>We also strived to make our kits accessible to all students regardless of background or age. We wanted young students to be able to use the kits on their own, which led to a <span className='italic'> lot</span> of consulting with elementary school science teachers, toy store owners, and families to create a product and brand that would be appealing and understandable by children. Overall, this resulted in big font sizes, detailed and clear illustrations, and very easy-to-follow instructions. This took a lot of revision, consulting with teachers and toy makers, and testing with families to get right.</p>

      <Break />

      <ImageWithTextRight img={stemchestsReviews}>

        <MiniTitle>TESTING</MiniTitle>
        
        <p>After this, I gave 25 "test boxes" to families from various different backgrounds and asked them to provide feedback for the kit, which helped me assess user pain points and helped me make some finishing touches to the instruction booklets and product to make it more accessible. In the end, this came down to small re-illustrations and wording tweaks.</p>
      </ImageWithTextRight>

      <Break />
      <MiniTitle>03: Logo Design</MiniTitle>
      <SubsectionTitle>Logo & Branding</SubsectionTitle>

      <p>STEMChests started from nothing, and my goal was to create a brand that would be instantly trustworthy. Since we were a team high school students who carefully assembled each kit by hand, I decided to give our products a more "hand-made", less corporate feel. I incorporated various illustrations, vibrant colors, and playful (yet legible) fonts to represent our non-profit.</p>

      <Gallery cols='sm:grid-cols-3' caption='Our logo in action!'>
        {gallery2.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-[40rem]'/>)}
      </Gallery>
      
      <Break />
      
      <MiniTitle>04: USER EXPERIENCE AND INTERFACE</MiniTitle>
      <SubsectionTitle>The Website</SubsectionTitle>

      <p>Since STEMChests did not have nearly enough name recognition or platform to attract buyers online, I structured the website to primarily provide legitimacy for donors and potential partners, rather than function as an e-commerce website. Since I was using a free Shopify web theme, I was severely limited in terms of web design and layout. However, through the color palette and text, I was able to still have the final product synergize with the STEMChests branding. You can find the current STEMChests website <Lnk href='https://www.stemchests.com/'>here</Lnk>.</p>

      <Gallery cols='sm:grid-cols-1'>
        {gallery4.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>

      <Break />

      <MiniTitle>05: TAKEAWAYS</MiniTitle>
      <SubsectionTitle>What I Learned</SubsectionTitle>

      <IconSection cols='lg:grid-cols-3'>
        <IconBox title='Balancing Viewpoints' icon={iconDesignNib}>
          <p>After receiving feedback from (quite literally) hundreds of people, I realized that many people's feedback would conflict. This project taught me how to take in and balance reviews from students, parents, and teachers alike, and try to reach a solution that made the most amount of people happy.</p>
        </IconBox>
        <IconBox title='Start Small' icon={iconGraphUp}>
          <p>Since I was building a non-profit from the ground up, I struggled at first to figure out how to even begin branding the product. I learned the hard way that at first, I needed a minimum viable product, and then to slowly scale up as the scale of my non-profit expanded.</p>
        </IconBox>
        <IconBox title='Wording Is Crucial' icon={iconDesignNib}>
          <p>Between consulting with families and science teachers in order to write instruction booklets for students, and condensing the STEMChests pitch into the most concise and clear version over time, I found that wording can sometimes matter more than visual appeal.</p>
        </IconBox>
      </IconSection>

      <Break />

      <MiniTitle>SUCCESS!</MiniTitle>
      <p>A few months ago, a customer came up to me at a workshop event and told me that they remembered me selling them a science kit a year before and that she recognized us from the boxes. It made me proud that I had created branding unique enough to be remembered for over a year, at least by one person :)</p>

      <Break />

      <Lnk href='/projects/popcorn'>Next Project →</Lnk>

      <Break />
    </>
  )
}