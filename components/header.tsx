"use client"

import React from 'react';
import Link from 'next/link';

import { links } from "@/lib/data";

export default function Header() {

  return (
    <header className='-ml-10 sm:-ml-24 top-0 bg-yellow-300 md:sticky w-screen z-[999] transition'>
      <hr className='solid border-primary-0 mb-0.5'></hr>
      <div className='
      font-light text-primary-0 
      h-fit top-0 w-full translate-x-0
      flex transition flex-wrap gap-x-6 gap-y-1 justify-center md:flex-row flex-col
      md:items-left md:justify-start items-center
      
      px-5 sm:px-24 md:px-[7.25rem]*
      '>

        <Link className='font-times tracking-tight font-normal whitespace-nowrap hover:text-yellow-450 transition duration-300 leading-[4rem] text-[3.25rem] md:text-8xl md:leading-[5rem]' href="/" >
          <span className='tracking-[-0.34rem] md:tracking-[-0.57rem]'>A</span>ditya <span className='-ml-[0.4rem] md:-ml-1.5 tracking-normal font-abcfavorit italic text-[3.1rem] md:text-[5.75rem]'>Das</span> <span className='-ml-2.5 md:-ml-3 xl:-ml-1'> ♡</span>
        </Link>

        <div className="grow flex-col w-full md:w-min text-base text-center sm:text-lg md:mt-0.5 -mt-2 mb-1 md:text-left">
          <p className="md:min-w-[31rem] font-light font-times leading-snug text-primary-100">
            <span className="pf">...is a master of none</span> & a lover of all. He is currently double majoring in <span className="pf">Art</span> and <span className="pf">Computer Science</span> at <span className="pf">Yale University &apos;27.</span>
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
      <hr className='solid border-primary-0'></hr>
    </header>
  )
}
