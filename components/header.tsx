"use client"

import React, {useState, useEffect} from 'react';
import Link from 'next/link';

import { links } from "@/lib/data";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

export default function Header() {
  const [expand, setExpand] = useState(true);

  function handleMouseOver() {setExpand(true)}
  function handleMouseOut() {setExpand(false)}

  const scrollDirection = useScrollDirection();

  return (

    <header className={`-ml-5 md:-ml-20 w-screen z-10 
    h-fit translate-x-0
    flex flex-wrap justify-center flex-row lowercase
    -mb-1 sticky
    
    px-5 md:px-20 pt-4 md:pt-7
    
    ${scrollDirection === 'down' ? '-top-24' : 'top-0'} transition-all duration-500 `}>

          
            <Link href='/' className='lf uppercase text-primary-0 hover:text-yellow-400 transition duration-300 '>Aditya Das ♡ </Link>
            
            
            <nav className='grow '>
                <ul className='pf flex flex-row min-w-min text-primary-100 justify-end -mt-0.5 md:mt-0 gap-x-1 md:gap-x-1.5 '>
                    {links.map((link, index) => (
                    <li key={index} className='flex flex-row gap-x-1 md:gap-x-1.5 min-w-min'>
                        <Link className='underline* hover:text-yellow-400 transition duration-300' href={link.href} target={link.newTab ? "_blank" : "_self"}>{link.name}</Link>
                        <p className=''>{index < links.length ? ' / ' : ''}</p>  
                    </li>
                    ))}
                    <li><a className='flex flex-row underline* hover:text-yellow-400 transition duration-300 font-normal' href='/aditya-das-cv.pdf' target='_blank' rel="noopener noreferrer">CV</a></li>
                </ul>
            </nav>
          
    </header>
  )
}