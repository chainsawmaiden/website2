"use client"

import React, {useState} from 'react';
import Link from 'next/link';

import { links } from "@/lib/data";
import {motion, AnimatePresence} from 'framer-motion';

export default function Header() {
  const [expand, setExpand] = useState(true);

  function handleMouseOver() {setExpand(true)}
  function handleMouseOut() {setExpand(false)}

  const headerText = <p className="md:min-w-[31rem] font-light font-times leading-snug text-primary-100">
  ...aspires to <span className="pf">tell stories creatively</span> through all mediums. He is currently double majoring in <span className="pf">Art</span> and <span className="pf">Computer Science</span> at YALE UNIVERSITY &apos;27.
  </p>

  const navBar = <nav>
  <ul className='flex flex-row justify-center gap-x-1 min-w-min text-primary-100 md:justify-start'>
    {links.map((link, index) => (
      <li key={index} className='flex flex-row gap-x-1 min-w-min sm:justify-start'>
        <Link className='underline hover:text-yellow-450 transition font-abcfavorit text-basefavorit sm:text-lgfavorit capitalize transition-duration-[300ms] font-normal' href={link.href} target={link.newTab ? "_blank" : "_self"}>{link.name}</Link>
        <p>{index < links.length ? ' / ' : ''}</p>    
      </li>
    ))}
    <li><a className='flex flex-row underline hover:text-yellow-450 transition font-abcfavorit text-basefavorit sm:text-lgfavorit capitalize transition-duration-[300ms] font-normal' href='/aditya-das-cv.pdf' target='_blank' rel="noopener noreferrer">CV</a></li>
  </ul>
</nav>

  return (
<<<<<<< Updated upstream
    <header className='mb-[0.2rem] mt-5 sm:mt-11'>
      <div className='
      font-light text-primary-0 
      h-fit top-0 w-full translate-x-0
      flex transition flex-wrap gap-x-8 gap-y-1 justify-center md:flex-row flex-col
      md:items-left md:justify-start items-center
      
      pb-2 sm:pb-1 px-0 md:px-5'>

        <Link className='font-times tracking-tight font-normal whitespace-nowrap hover:text-primary-400 transition duration-300 leading-[4rem] text-[3.25rem] md:text-8xl md:leading-[5rem]' href="/" ><span className='tracking-[-0.34rem] md:tracking-[-0.57rem]'>A</span>ditya <span className='-ml-2 tracking-normal font-abcfavorit italic text-[3.1rem] md:text-[5.75rem]'>Das</span></Link>

        <div className="grow flex-col w-full md:w-min text-base text-center sm:text-lg md:mt-0.5 -mt-1.5 md:text-left">
          <p className='sm:hidden font-abcfavorit font-bold text-basefavorit'>-- BETTER ON DESKTOP --</p>
          <p className="md:min-w-[31rem] font-light font-times leading-snug text-primary-100">
            <span className="pf">A lover of all trades</span> & a master of none. Currently double majoring in <span className="pf">art</span> and <span className="pf">computer science</span> at YALE UNIVERSITY &apos;27. ♡
          </p>
          <nav >
            <ul className='flex flex-row justify-center gap-x-1 min-w-min text-primary-100 md:justify-start'>
              {links.map((link, index) => (
                <li key={index} className='flex flex-row gap-x-1 min-w-min sm:justify-start'>
                  <Link className='underline hover:text-primary-400 transition font-abcfavorit text-basefavorit sm:text-lgfavorit capitalize transition-duration-[300ms] font-normal' href={link.href} target={link.newTab ? "_blank" : "_self"}>{link.name}</Link>
                  <p>{index < links.length ? ' / ' : ''}</p>    
                </li>
              ))}
              <li><a className='flex flex-row underline hover:text-primary-400 transition font-abcfavorit text-basefavorit sm:text-lgfavorit capitalize transition-duration-[300ms] font-normal' href='/aditya-das-cv.pdf' target='_blank' rel="noopener noreferrer">CV</a></li>
            </ul>
          </nav>
=======

    <header className='-ml-10 sm:-ml-24 top-0 bg-yellow-300 md:sticky w-screen transition z-10 cursor-help'
            >
      <div className='hidden lg:block h-full w-full'>
        <hr className='solid border-primary-0 mb-3'></hr>
        <div className='
        font-light text-primary-0 
        h-fit top-0 w-full translate-x-0
        flex transition flex-wrap gap-x-6 gap-y-1 justify-center md:flex-row flex-col
        md:items-left md:justify-start items-center
        
        px-5 sm:px-24 md:px-[7.25rem]*
        '>

          <Link className='font-times tracking-tight font-normal whitespace-nowrap hover:text-yellow-450 transition duration-300 leading-[4rem] text-[3.25rem] xl:text-8xl xl:leading-[5rem]' href="/" >
            <span className='tracking-[-0.34rem] xl:tracking-[-0.57rem]'>A</span>ditya <span className='-ml-[0.4rem] xl:-ml-1.5 tracking-normal font-abcfavorit italic text-[3.1rem] xl:text-[5.75rem]'>Das</span> <span className='-ml-2.5 xl:-ml-1'> ♡</span>
          </Link>

          <div className="grow flex-col w-full md:w-min text-base text-center sm:text-lg md:mt-0.5 -mt-2 mb-1 md:text-left">
            {headerText}
            {navBar}
          </div>
>>>>>>> Stashed changes
        </div>
        <hr className='solid border-primary-0'></hr>
      </div>
<<<<<<< Updated upstream
      <hr className="solid border-primary-400 -mt-0.5 sm:mt-0 mb-[0.14rem] sm:mb-1.5"></hr>
=======
              
      <div className='h-full w-full block lg:hidden'
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>{expand ? <AnimatePresence><motion.article
        initial={{height: 33.2, opacity: 0}}
        animate={{height: 'min-content', opacity: 100}}
        exit={{height: 33.2, opacity: 0}}
        transition={{duration: .2}}>   
        <hr className='solid border-primary-0 mb-0.5'></hr>
        <div className='
        font-light text-primary-0 
        h-fit top-0 w-full translate-x-0
        flex transition flex-wrap gap-x-6 gap-y-1 justify-center md:flex-row flex-col
        md:items-left md:justify-start items-center
        
        px-5 sm:px-24 md:px-[7.25rem]* py-4
        '>

          <Link className='font-times tracking-tight font-normal whitespace-nowrap hover:text-yellow-450 transition duration-300 leading-[4rem] text-[3.25rem] md:text-8xl md:leading-[5rem] md:mb-3' href="/" >
            <span className={`tracking-[-0.34rem] md:tracking-[-0.57rem]`}>A</span>ditya <span className='-ml-[0.4rem] md:-ml-1.5 tracking-normal font-abcfavorit italic text-[3.1rem] md:text-[5.75rem]'>Das</span> <span className='-ml-2.5 md:-ml-3 xl:-ml-1'> ♡</span>
          </Link>

          <div className="grow flex-col w-full md:w-min text-base text-center sm:text-lg md:mt-0.5 -mt-2 mb-1 md:text-left">
            {headerText}
            {navBar}
            <p className='text-yellow-450 block text-sm animate-pulse mt-1 -mb-3 cursor-pointer sm:hidden' 
            onClick={handleMouseOut}>[tap to collapse]</p>
          </div>
        </div>
        <p className='text-yellow-450 text-sm animate-pulse -mt-5 mb-1 w-full text-center hidden sm:block'>[drag mouse out to collapse]</p>
        <hr className='solid border-primary-0'></hr>
      </motion.article></AnimatePresence>
      : <motion.article
        initial={{height: 80, opacity: 0}}
        animate={{height: 'min-content', opacity: 100}}
        transition={{duration: .2}}>     
        <hr className='solid border-primary-0 mb-0.5'></hr>
        <div className='
        flex justify-between
        font-normal text-primary-0 
        h-fit top-0 w-full
        
        px-5 sm:px-24 md:px-[7.25rem]*
        '>

          <Link className='animate-pulse font-times tracking-tight whitespace-nowrap hover:text-yellow-450 transition duration-300 text-2xl' href="/" >
            <span className={`tracking-[-.11rem]`}>A</span>ditya <span className='-ml-[0.18rem] tracking-normal font-abcfavorit italic text-[1.43rem]'>Das</span> <span className='-ml-[.18rem]'> ♡</span>
          </Link>

           <p className='text-yellow-450 hidden text-sm animate-pulse sm:block py-2'>[hover to expand]</p>
           <p className='text-yellow-450 block text-sm animate-pulse sm:hidden py-2'>[tap to expand]</p>
        </div>
        <hr className='solid border-primary-0'></hr>
      </motion.article>}</div>
>>>>>>> Stashed changes
    </header>
  )
}
