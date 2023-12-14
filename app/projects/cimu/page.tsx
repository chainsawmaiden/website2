import Break from '@/components/break'
import Lnk from '@/components/lnk'
import ProjectOverview from '@/components/projectOverview'
import { Metadata } from 'next'
import React from 'react'

import ImageWithTextLeft from '@/components/imageWithTextLeft'
import ImageWithTextRight from '@/components/imageWithTextRight'

export const metadata: Metadata = {
  title: 'Cimu - Aditya Das',
  description: 'Cimu case study by Aditya Das.'
}

import iconArrowRight from '@/public/icons/arrow-right.svg'
import iconCart from '@/public/icons/cart.svg'
import iconClockOutline from '@/public/icons/clock-outline.svg'
import iconShopAlt from '@/public/icons/shop-alt.svg'
import iconGroup from '@/public/icons/group.svg'
import iconDesignPencil from '@/public/icons/design-pencil.svg'
import iconBook from '@/public/icons/book.svg'
import iconSunLight from '@/public/icons/sun-light.svg'
import iconInfoEmpty from '@/public/icons/info-empty.svg'
import iconCalendar from '@/public/icons/calendar.svg'
import iconProfileCircled from '@/public/icons/profile-circled.svg'
import iconCheckedCircleOutline from '@/public/icons/check-circled-outline.svg'
import iconMenuScale from '@/public/icons/menu-scale.svg'
import iconDataTransfer from '@/public/icons/data-transfer.svg'

import twoPhoneDisplay from '@/public/cimu/welcome-schedule-hovering-mockup.png'
import loadingAnimation from '@/public/cimu/loading-animation.gif'

import createAccount from '@/public/cimu/create-account-popup.gif'
import registerShopNew from '@/public/cimu/register-shop-new.gif'
import registerShopOld from '@/public/cimu/register-shop-old.gif'
import chooseSpecialties from '@/public/cimu/choose-specialties.gif'
import hoursFinal from '@/public/cimu/hours-final-uncompressed.gif'
import scheduleMeeting from '@/public/cimu/schedule-meeting.gif'
import accountVerifiedPopup from '@/public/cimu/account-verified-popup.gif'
import loginPhone from '@/public/cimu/login-phone.gif'
import loginPassword from '@/public/cimu/login-password.gif'
import finalMockups from '@/public/cimu/final-mockups.png'

import hours1 from '@/public/cimu/hours-fail-1.gif'
import hours2 from '@/public/cimu/hours-fail-2.gif'
import hours3 from '@/public/cimu/hours-fail-3.gif'
import hours4 from '@/public/cimu/hours-fail-4.gif'

import password1 from '@/public/cimu/password-1.png'
import password2 from '@/public/cimu/password-2.png'
import password3 from '@/public/cimu/password-3.png'
import passwordFinal from '@/public/cimu/password-final.png'

import appAudit from '@/public/cimu/app-audit.png'
import colors from '@/public/cimu/colors.svg'
import fonts from '@/public/cimu/fonts.png'
import components from '@/public/cimu/components.png'
import margins from '@/public/cimu/margins.png'
import flow from '@/public/cimu/flow.png'
import lofiToHifi from '@/public/cimu/lofi-to-hifi.png'
import accountLofi from '@/public/cimu/account-lofi.png'
import passwordLofi from '@/public/cimu/password-lofi.png'

import Gallery from '@/components/gallery'
import ImageModal from '@/components/imageModal'

import MiniTitle from '@/components/miniTitle'
import SectionTitle from '@/components/sectionTitle'

import IconSection from '@/components/iconSection'
import IconBox from '@/components/iconBox'

import SubsectionTitle from '@/components/subsectionTitle'
import { StaticImageData } from 'next/image'

const gallery0 = [twoPhoneDisplay] as const;
const gallery1 = [accountLofi, passwordLofi] as const;

type subCaption = {img: StaticImageData, caption: string,}
const gallery2 = [
    {img: hours1, caption: 'Iteration 1: I started with a “when2meet” inspired idea, which was a major fail. It was unintuitive, took forever to enter in, and was just overall impossible to properly use.'},
    {img: hours2, caption: 'Iteration 2: Afterwards, I tried a horizontal scrolling option. This felt a lot more intuitive, but I felt there was still an inefficient use of space.'},
    {img: hours3, caption: 'Iteration 3: I tried laying the days out vertically, which allowed me to harness the empty space on the page.'},
    {img: hours4, caption: 'Iteration 4: I then auto-filled a default 9-to-5 schedule into the days, so that tailors would see an “example” of how entering hours would work.'},
] as subCaption[];

const gallery3 = [
    {img: password1, caption: 'Iteration 1'},
    {img: password2, caption: 'Iteration 2'},
    {img: password3, caption: 'Iteration 3'},
] as subCaption[];

export default function Page() {
    return (
    <>
        <ProjectOverview
            title='Case Study: Cimu Onboarding'
            tagline='Designing a friendly design system and onboarding process for older, LEP users.'
            timeline='Nov 2023 - Dec 2023'
            team='Aditya Das, Alana Tiu, Martin Vakoč, Kaci Xie, Zepto'
            role='Product Designer'
            tools='Figma'
            skills='Product Design, Rapid Prototyping, UX/UI'>
            <>
                <p><span className='lf '>OVERVIEW: </span>Cimu is a start-up business based in New Haven, CT that aims to help online fashion retailers improve sales and reduce waste by connecting shoppers with local tailors.</p>

                <p>I was contracted to design their tailor-facing app, which will allow tailors to view and connect to customers. I was specifically in charge of creating a scalable and robust design system for the mobile app and building a simple, quick, and friendly onboarding system.</p>
                
                <ul className='list-inside list-disc'>
                    <li>How do I create an onboarding system that is friendly and accessible for older users with limited English proficiency?</li>
                    <li>How do I create a design system that is accessible, aesthetic, and unique?</li>
                </ul>

                <p>I worked in a team consisting of both the CEO and the lead developer of Cimu, along with two other contracted UX designers.</p>
            </>
        </ProjectOverview>

        <Break />

        <Gallery cols='sm:grid-cols-1 ' caption="Welcome to Cimu.">
            {gallery0.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-[85vh]'/>)}
        </Gallery>

        <MiniTitle>01: Summary</MiniTitle>
        <SectionTitle>A Journey Through Cimu</SectionTitle>

        <Gallery cols='sm:grid-cols-1 '>
            <ImageModal src={loadingAnimation} rounded={true} maxh='max-h-[85vh]'/>
        </Gallery>

        <p>Cimu connects shoppers to tailors so that they can get their clothes easily altered to fit, instead of having to return them. Here’s how that process works:</p>

        <IconSection cols='md:grid-cols-2 gap-6'>
            <IconBox title='Customer Schedules Through Online Store' icon={iconCart}>
            <p>Say you’re shopping at Uniqlo, and you go to checkout. A pop-up during checkout offers you an option to schedule a tailoring appointment through Cimu. This saves you the trouble of having to find and call a tailor shop and manually schedule an appointment. And you don’t even need to download anything!</p>
            </IconBox>
            <IconBox title='Tailor Confirms Appointment via Cimu App' icon={iconClockOutline}>
            <p> The tailor now sees your Uniqlo tailoring request and confirms the appointment. <span className='italic'>They do this on a specific tailor-facing Cimu app, which is where my team comes in.</span></p>
            </IconBox>
            <IconBox title='Customer Meets Tailor' icon={iconShopAlt}>
            <p>After the tailor confirms the appointment, you can go to the local tailor shop at the set time to get your clothes measured and ready to be altered.</p>
            </IconBox>
            <IconBox title='Pickup' icon={iconArrowRight}>
            <p>Once the tailor is done with the alterations, you’re sent a notification to pick up your clothes!</p>
            </IconBox>
        </IconSection>

        <p>The idea is that shoppers won’t even need to have a Cimu account, they can just use it through their online shop and get sent notifications accordingly. However, we needed to design an app for tailors, so that they can manage all incoming appointments. With this in mind, I got to work coming up with an onboarding process.</p>

        
        <SectionTitle separate={true}>Account Creation</SectionTitle>

        <p>Ultimately, I split the onboarding process into a 5 steps.</p>

        <ImageWithTextRight img={createAccount}>
            <MiniTitle>STEP 01</MiniTitle>
            <SubsectionTitle>Create Account</SubsectionTitle>
            <p>Short and sweet, to reduce the chances of a user getting overwhelmed and closing the app before even creating their account.</p>
        </ImageWithTextRight>
        <ImageWithTextRight img={registerShopNew}>
            <MiniTitle>STEP 02</MiniTitle>
            <SubsectionTitle>Register Shop</SubsectionTitle>
            <p>If users don’t have a shop, they can enter in the address and name from scratch.</p>
        </ImageWithTextRight>
        <ImageWithTextRight img={registerShopOld}>
            <p>Or, if their shop is already present in the Cimu system, they can just confirm the information and move on.</p>
        </ImageWithTextRight>
        <ImageWithTextRight img={hoursFinal}>
            <MiniTitle>STEP 03</MiniTitle>
            <SubsectionTitle>Setting a Schedule</SubsectionTitle>
            <p>Tailors set their weekly availabilities.</p>
        </ImageWithTextRight>
        <ImageWithTextRight img={chooseSpecialties}>
            <MiniTitle>STEP 04</MiniTitle>
            <SubsectionTitle>Choosing Specialties</SubsectionTitle>
            <p>This helps make sure that Cimu creates optimal customer-tailor pairings.</p>
        </ImageWithTextRight>
        <ImageWithTextRight img={scheduleMeeting}>
            <MiniTitle>STEP 05</MiniTitle>
            <SubsectionTitle>Schedule Verification Meeting</SubsectionTitle>
            <p>Finally, users can schedule a meeting for a Cimu representative to verify them in-person.</p>
        </ImageWithTextRight>
        <ImageWithTextRight img={scheduleMeeting}>
            <MiniTitle>ASIDE: EDITING INFORMATION</MiniTitle>
            <p>It’s also easy for users to quickly edit their information, in case they realized they entered something incorrectly.</p>
        </ImageWithTextRight>

        <Gallery cols='sm:grid-cols-1 '>
            <ImageModal src={accountVerifiedPopup} rounded={true} maxh='max-h-[85vh]'/>
        </Gallery>

        <MiniTitle>QUICK AND SIMPLE VERIFICATION</MiniTitle>
        <p>After Cimu verifies the user during the meeting, they will get a notification that their account is verified and they’re ready to start receiving appointments from customers.</p>

        <ImageWithTextLeft img={loginPhone}>
            <MiniTitle>ASIDE: LOGGING IN</MiniTitle>
            <SubsectionTitle>Automatic Redirection</SubsectionTitle>
            <p>If a user already has an account, Cimu will automatically redirect them to the log in page.</p>
        </ImageWithTextLeft>
        <ImageWithTextLeft img={loginPassword}>
            <p>Users can also choose to login with their password if they desire.</p>
        </ImageWithTextLeft>

        <SubsectionTitle separate>↓ Scroll down to read more about my process</SubsectionTitle>

        <Break />

        <MiniTitle>02: UNDERSTANDING TAILORS</MiniTitle>
        <SectionTitle>Tailor Demographics</SectionTitle>
        <p>After being brought onto this project, I did a deep dive into tailor demographics to understand how to best customize our app to fit their needs. I also stopped by a couple local tailor shops to meet local tailors to gather qualitative data about their shops and how they worked. Here are the major findings:</p>

        <IconSection cols='lg:grid-cols-3'>
            <IconBox icon={iconDesignPencil} title='Limited English Proficiency (LEP)'>
                Over 50% are people of color, many of whom are immigrants.
            </IconBox>
            <IconBox icon={iconGroup} title='Older Audience'>
                Over 85% of tailors are over 40 years old, with the average age of tailors being roughly 50-55.
            </IconBox>
            <IconBox icon={iconBook} title='Appointment books and phone calls'>
                Many tailors still use appointment books and paper documents to keep track of everything.          
            </IconBox>
        </IconSection>

        <SectionTitle separate>Meeting Tailor’s Needs</SectionTitle>

        <p>To design an onboarding process--and a general design system-- for Cimu, I had to make sure that it would be easy for older users with limited English proficiency, since that would be a sizable portion of the user base.</p>

        <p>First, I ran some audits of onboarding processes on various apps: either ones that had a significant portion of older users, or ones that were structured similarly to Cimu.</p>

        <Gallery cols='sm:grid-cols-1 ' caption='I also audited various social media platforms, such as Facebook and WhatsApp.'>
            <ImageModal src={appAudit} rounded={true} maxh='max-h-[85vh]'/>
        </Gallery>

        <Break />

        <MiniTitle>03: DESIGN GOALS</MiniTitle>
        <SectionTitle>Accessibility First</SectionTitle>

        <p>After conducting some additional research on good UX practices for older and LEP users, I came up with four major goals.</p>

        <IconSection cols='sm:grid-cols-2 lg:grid-cols-4'>
            <IconBox icon={iconSunLight} title='High Contrast'>
                Many older users may have impaired vision, meaning larger font sizes and more distinct color contrasts.
            </IconBox>
            <IconBox icon={iconBook} title='Accessible Diction'>
                I tried to avoid phrases that LEP users may struggle to understand, such as “jump back in.
            </IconBox>
            <IconBox icon={iconInfoEmpty} title='Simple and Consistent'>
                Use very standard UI layouts with very little complexity. Oftentimes, older users need pointers as to what is an interactive element. I tried to use the onboarding process as a “tutorial” for what interactive elements vs. non-interactive elements would look like.           
            </IconBox>
            <IconBox icon={iconCalendar} title='Easy to Manage'>
                This one is kind of broad, but I wanted to ensure that tailors could use the app in conjunction with their phone-and-paper bookings, to avoid double bookings and awkward cancellations.         
            </IconBox>
        </IconSection>

        <Break />

        <MiniTitle>04: DESIGN SYSTEM</MiniTitle>
        <SectionTitle>Adapting Cimu’s Brand</SectionTitle>
        <p>Cimu’s CEO provided us with a very detailed brand kit, which gave us a strong starting point to build our app designs from. However, as I began creating high-fidelity mockups, I realized that some tweaks had to be made in order to maintain accessibility.</p>

        <ImageWithTextRight img={colors}>
            <SubsectionTitle>Colors</SubsectionTitle>
            <p>Cimu had a very wide range of colors to choose from to create a design system for our app.</p>
            <p>However, many colors had poor contrast or were simply too saturated and strained the eyes. I altered the colors accordingly to fix those issues.</p>
        </ImageWithTextRight>
        <ImageWithTextLeft img={fonts}>
            <SubsectionTitle>Cimu Fonts</SubsectionTitle>
            <p>Cimu had two fonts: Halogen and Avenir. However, Halogen was too wide and unreadable for us to implement in any meaningful way, so we decided not to include it.</p>
        </ImageWithTextLeft>
        <ImageWithTextRight img={components}>
            <SubsectionTitle>Components</SubsectionTitle>
            <p>We decided that all interactive elements should have strokes to them.</p>
            <p>Moreover, buttons are fully rounded to separate them from other components (unless it severely impacts space, such as in the “Date” component).</p>
        </ImageWithTextRight>

        <Gallery cols='sm:grid-cols-1'>
            <ImageModal src={margins} rounded={true} maxh='max-h-[85vh]'/>
        </Gallery>
        <SubsectionTitle>Margins</SubsectionTitle>
        <p>Margins were relatively standard, with a 12-px spacing between most components, except for select interactions where it was necessary to include more/less spacing. This would allow elements to be easily clickable, especially for older audiences that may struggle with tapping the screen accurately.</p>

        <Break />

        <MiniTitle>05: FLOW</MiniTitle>
        <SectionTitle>Fast, User-Friendly Onboarding</SectionTitle>

        <Gallery cols='sm:grid-cols-1' caption='Flow proposal for Cimu.'>
            <ImageModal src={flow} rounded={true} maxh='max-h-[85vh]'/>
        </Gallery>

        <p>I wanted it to be as fast as possible for people set up their accounts. Taking inspiration from other successful apps (such as Uber) I split the process up into two steps:</p>

        <IconSection cols='sm:grid-cols-2'>
            <IconBox icon={iconProfileCircled} title='Create an Account'>
                This would be as fast as possible, so users would have an account ready to go.
            </IconBox>
            <IconBox icon={iconCheckedCircleOutline} title='Verify Your Account'>
                This would have processes that may take longer to complete, such as scheduling a verification meeting and setting hours.
            </IconBox>
        </IconSection>

        <p>This way, I reduce the chance of users not even creating an account in the first place. And once a user has an account created, they’re more incentivized to take the steps to verify it. It’s a win-win!</p>

        <Break />
        <MiniTitle>06: VISUAL DESIGN</MiniTitle>
        <SectionTitle>Low to High Fidelity</SectionTitle>
        <p>During my first week contracted, I created dozens upon dozens of low fidelity mockups to figure out how to map key information onto each page. Here are some low fidelity iterations next to their high fidelity counterparts:</p>

        <Gallery cols='sm:grid-cols-1'>
            <ImageModal src={lofiToHifi} rounded={true} maxh=''/>
        </Gallery>
        
        <SubsectionTitle separate>Splitting Processes Across Multiple Screens</SubsectionTitle>
        <Gallery cols='lg:grid-cols-2'>
            {gallery1.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='max-h-[85vh]'/>)}
        </Gallery>
        <p>I also continued to split up information amongst the pages, to continue to try to achieve maximum simplicity in terms of instructions. Throwing all of the information on one long form overwhelmed users, especially older ones that were less technologically adept.</p>
        <SubsectionTitle separate>Why A Progress Bar?</SubsectionTitle>
        <p>During preliminary testing, I found that users often believed that the account creation process was going to be a much longer process than what it actually ended up being. I opted to include the progress bar to help show users that the sign-up process was only three steps long, incentivizing them to make an account.</p>

        <Break />
        <MiniTitle>07: CHALLENGES</MiniTitle>
        <SectionTitle>Simplifying Interfaces</SectionTitle>
        <p>Considering that I was designing for older, LEP users, I spent a lot of time on distilling the user interface into its simplest form. Below are some of the more interesting challenges that I faced while designing for Cimu.</p>

        <SubsectionTitle separate>Setting Schedules</SubsectionTitle>
        <p>Finding the perfect interaction for setting the hours was a major challenge for me. I wanted it to be possible for tailors to set a more complex schedule with breaks included.</p>

        <section className={`grid grid-cols-1 lg:grid-cols-2 min-h-fit flex-col justify-items-center sm:flex-row overflow-x-scroll gap-y-3 gap-x-3 py-3 my-0 rounded-md items-center scrollbar-hide sm:-mx-8 text-primary-600 text-center bt`}>
            {gallery2.map((data) => 
                <div className='space-y-2' key={data.caption}>
                    <ImageModal src={data.img} rounded={true} maxh='max-h-[85vh]'/>
                    <p>{data.caption}</p>
                </div>
            )}
        </section>

        <Gallery cols='sm:grid-cols-1' caption='Final Iteration: Focusing on making the previous iterations easier to use.'>
            <ImageModal src={hoursFinal} rounded={true} maxh=''/>
        </Gallery>

        <p>Finally, I returned back to those most goals of accessibility and simplicity. I made the buttons larger to make it easier for users to select the correct times, and added a dropdown arrow with a time picker to hint that these “times” were editable. This made the page much easier to use and to understand. Overall, I’d call the final design a success!</p>

        <SubsectionTitle separate>Password Completion</SubsectionTitle>
        <p>From personal experience (my mom), older tech users are not super great at setting passwords. With this in mind, I wanted to make sure the requirements for password setting were as simple and clear as possible.</p>

        <section className={`grid grid-cols-1 md:grid-cols-3 min-h-fit flex-col justify-items-center sm:flex-row overflow-x-scroll gap-y-3 gap-x-3 py-3 my-0 rounded-md items-center scrollbar-hide sm:-mx-8 text-primary-600 text-center bt`}>
            {gallery3.map((data) => 
                <div className='space-y-2' key={data.caption}>
                    <ImageModal src={data.img} rounded={true} maxh=''/>
                    <p>{data.caption}</p>
                </div>
            )}
        </section>

        <Gallery cols='sm:grid-cols-1' caption='Final Iteration'>
            <ImageModal src={passwordFinal} rounded={true} maxh='max-h-[85vh]'/>
        </Gallery>

        <p>While all of my changes to the page were quite subtle, I got feedback on the third iteration that the “Must contain” box looked too much like a multiple choice box. I also realized that the design of the section broke the design system rules that I’d set for the project. </p>

        <p>After testing out various different symbols for the “unsatisfied requirement” state, I settled with the X symbol above. That way, the starting screen wouldn’t look like an error state, but other incomplete states would communicate there were still requirements that were not met.</p>

        <Break />

        <Gallery cols='sm:grid-cols-1'>
            <ImageModal src={finalMockups} rounded={true} maxh=''/>
        </Gallery>

        <p>By the end of job, I had created over 150 different low- and hi-fi frames, as well as the prototypes shown in the beginning of this case study.</p>

        <Break />
        <MiniTitle>09: TAKEAWAYS</MiniTitle>
        <SectionTitle>Lessons I Learned</SectionTitle>

        <IconSection cols='grid-cols-1'>
            <IconBox icon={iconDataTransfer} title='Functionality First'>
                <p>My greatest area of strength is in visual/graphic design, so this project helped me hone my ability to create consistent and understandable flows. Oftentimes, flashy UI can appear to mask bad functionality, but eventually, the flaws will always poke holes through the final product.</p>
                <p>For this project, I first worked on first understanding the tailors I was designing for and building a comprehensive lo-fi system before throwing any colors or pretty visuals into the design.</p>
            </IconBox>
            <IconBox icon={iconDesignPencil} title='Stay Organized!'>
                At first, I had all my designs thrown across a horribly messy Figma file. After I realized how difficult it was for others to go through to find my “Password final final FINAL” mockup, I worked on organizing everything into simple sections with explicit names. And honestly, it helped me as much as it helped the rest of the team.
            </IconBox>
            <IconBox icon={iconMenuScale} title='Be Thorough'>
                I learned the hard way to NOT leave my designs open to interpretation, but rather be as thorough and explicit as I could to avoid handoff mix-ups.
            </IconBox>
            
        </IconSection>

        <Break />

        <Lnk href='/projects/stemchests'>Next Project →</Lnk>

        <Break />
    </>
  )
}
