"use client"

import React from 'react';
import Link from 'next/link';

import { links } from "@/lib/data";

export default function Header() {

  return (
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
        </div>
      </div>
      <hr className="solid border-primary-400 -mt-0.5 sm:mt-0 mb-[0.14rem] sm:mb-1.5"></hr>
    </header>
  )
}
