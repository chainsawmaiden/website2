"use client"

import React from 'react';
import Link from 'next/link';

import { links } from "@/lib/data";

export default function Header() {

  return (
    <header className='mb-[0.2rem]'>
      <div className='
      font-light bg-secondary-0 text-primary-0 
      h-fit top-0 w-full translate-x-0
      flex transition flex-wrap gap-x-8 gap-y-1 justify-center 
      sm:flex-row sm:items-left sm:justify-start
      
      pb-2 sm:pb-1'>

        <Link className='font-abcfavorit font-normal whitespace-nowrap hover:text-primary-400 transition duration-300 leading-[4rem] text-[3.5rem] md:text-8xl md:leading-[5rem]' href="/" >ADITYA DAS</Link>

        <div className="grow flex-col -mt-1 w-min text-base text-center sm:text-lg sm:text-left">
          <p className='sm:hidden font-abcfavorit font-bold text-basefavorit'>-- BETTER ON DESKTOP --</p>
          <p className="sm:min-w-[28rem] font-light font-times leading-snug text-primary-100">
            <span className="pf">A lover of all trades</span> & a master of none. Currently double majoring in <span className="pf">art</span> and <span className="pf">computer science</span> at <span className="pf">YALE UNIVERSITY &apos;27. </span> ♡
          </p>
          <nav >
            <ul className='flex flex-row justify-center gap-x-1 min-w-min text-primary-100 sm:justify-start'>
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
      <hr className="solid border-primary-400 mt-1 mb-2"></hr>
    </header>
  )
}
