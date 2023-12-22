"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import Link from 'next/link';
import Image from 'next/image';
import { filters, projectsData, categories } from '@/lib/data';

import iconList from '@/public/icons/icon-list.png'
import iconListHover from '@/public/icons/icon-list-hover.png'
import iconGrid from '@/public/icons/icon-grid.png'
import iconGridHover from '@/public/icons/icon-grid-hover.png'
import HoverImage from './hoverImage';

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

export default function Hero() {
    const [isHovering, setIsHovering] = useState(false as boolean);
    const [hoverContent, setHoverContent] = useState([] as any[]);
    const [myFilters, setMyFilters] = useState(['all'] as string[]);
    const [boxView, setBoxView] = useState(true as boolean);

    const scrollDirection = useScrollDirection();

    console.log('rendered')

    function handleMouseOver({title, hoverImage, page, description}: {title: string, hoverImage: object, page: string, description: string}) {
        setIsHovering(true);
        setHoverContent([title, hoverImage, page!="", description]);
    }

    function handleMouseOut() {
        setIsHovering(false);
    }

    function handleClickAll() {
        myFilters.includes('all') ? setMyFilters([]) : setMyFilters(['all'])
    }

    function handleToggle() {
        setBoxView((oldView) => !oldView)
    }

    function handleClick(f: string) {
        myFilters.includes('all') ? setMyFilters([f]) :
        myFilters.includes(f) ? setMyFilters((old:any[string]) => (old.filter((item: string) => item != f))) : 
        myFilters.length === filters.length -1 ? setMyFilters(['all']) : setMyFilters((old:string[]) => [...old, f])
        console.log(myFilters)
    }

    function Filters() {
        return (<section className={`flex lowercase justify-between pf min-w-min sm:items-start `}>
            <p 
                onClick={() => handleClickAll()}
                className={`underline* cursor-pointer ${myFilters.includes('all') ? 'text-primary-100 hover:text-yellow-500' : 'text-yellow-600 hover:text-yellow-700'} whitespace-nowrap justify-self-center transition duration-300 ease-in'`}
            >{myFilters.includes('all') ? 'all ❤︎' : 'all ♡'}</p>
                    
            {filters.map((f, index) => (
                <p 
                    onClick={() => handleClick(f)}
                    className={`underline* cursor-pointer ${myFilters.includes(f) ? 'text-primary-100 hover:text-yellow-500' : 'text-yellow-600 hover:text-yellow-700'} whitespace-nowrap justify-self-center transition duration-300] ease-in`} 
                    key={index}>{f}</p>
            ))}
            <p 
                onClick={() => handleToggle()}
                className={`underline* sm:block cursor-pointer text-primary-100 hover:text-yellow-700 whitespace-nowrap justify-self-center transition duration-300 ease-in lowercase`}>[toggle view]</p>
            
        </section>)
    }

    function Label({children} : {children: React.ReactNode}) {
        return <div className='hidden md:inline'><div className="bf col-span-full md:col-span-1 md:flex md:flex-col-reverse md:-ml-[2rem] justify-start items-start md:-rotate-180 md:h-auto md:w-min"><p className='-mb-0.5 md:mb-0 text-primary-400 uppercase md:[writing-mode:vertical-lr] whitespace-nowrap'>{children}</p></div></div>
    }

    return (
        // okay basically this is so horribly coded but i'm not smart enough to do it better so here's a quick explanation

        // flex-col that goes down and displays the hero elements
        // 1. filters (+ toggle button), nested in div function to add just a tiny bit of formatting stuff
        // 2. goes through categories and for each category...
        // 3. creates a two-column table, one column with the label and the other with the items in it
        //      sidenote: if lg or smaller, the label just gets added to the flex col and is placed horizontally
        // 4. sooooo bad so bad so bad but yeah thats basically what it does and then theres some other super jank stuff

        <>
            <section className={`block w-full z-10 mt-1 px-0 sticky ${scrollDirection === 'down' ? '-top-[3.75rem] md:-top-12' : ' top-9 md:top-12'} transition-all duration-500`}>
                <Filters />
            </section>
            <section className={`flex flex-col h-auto pt-2 sm:pt-4 -mx-8 px-8 gap-y-3 ${boxView ? 'pb-2' : 'pb-6'}`}>

                {categories.map((category, categoryIndex) => (<div key={categoryIndex} className='grid md:grid-cols-[0rem_auto] auto-rows-min'>
                    
                    <Label>{category}</Label>
                
                    
                    <section key={categoryIndex} className={` ${!boxView ? 'grid-cols-none flex flex-wrap font-normal gap-x-2 sm:gap-x-4 justify-start' : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>    

                        {projectsData.map((project, index) => {

                            const contentImage = <Image 
                                    src={project.displayImage}
                                    sizes="50vw"
                                    alt="project image"
                                    className={boxView ? 'p-[7.5%] aspect-square object-contain w-auto transition duration-300' : 'sm:group-hover:opacity-50 object-contain w-min transition duration-300 max-w-[2rem] sm:max-w-[3rem] max-h-5 mt-1 sm:mt-0 sm:mr-1.5 sm:max-h-10'}
                                />


                            const contentGrid = <>
                                <p className='text-primary-300 text-[.5rem] font-normal font-abcdiatype mt-1 sm:mt-0.5 transition duration-300 w-4'>{`[${index+1 < 10 ? '0' : ''}${(index+1)}]`}</p>

                                {contentImage}
                                                
                                <p className='text-primary-100 mr-1.5 uppercase lf sm:mr-3 [overflow-wrap: break-word] transition duration-300'>{project.title}<span className='pf lowercase'>{project.description}</span></p>
                            </>

                            const contentList = <div className='flex h-content mb-0 sm:mb-1 -translate-y-0.5'>
                                <p className={`group-hover:text-yellow-400 text-[.5rem] text-primary-300 font-abcdiatype transition duration-300 w-4 mt-0.5 sm:mt-0`}>{`[${index+1 < 10 ? '0' : ''}${(index+1)}]`}</p>

                                <p className={`group-hover:text-yellow-400 text-primary-100 whitespace-nowrap mr-1.5 sm:mr-3 sm:mt-2 transition duration-300 ${true ? `font-abcfavorit text-2xl sm:text-5xlfavorit italic*` : `text-5xl uppercase font-times`}`}>{project.title}</p>

                                {contentImage}
                            </div>

                            const content = boxView ? <>{contentGrid}</> : <>
                                {contentList}
                            </>;
                            
                            return (
                                    
                                project.category == category && (project.page != "" ? 

                                    <Link className={`group flex transition duration-500 h-auto w-full ${boxView ? 'break-inside-avoid rounded-sm flex-col hover:z-0 pb-2 -mt-1 hover:scale-[1.03]' : `flex-row hover:scale-[1.02]* py-0 h-fit -mb-1 sm:mb-0 w-min`} ${myFilters.includes('all') || myFilters.some((r:string) => project.type.includes(r)) ? (boxView ? 'flex' : 'flex visible') : (boxView ? 'hidden' : 'invisible flex')}`}
                                        onMouseOver= {() => handleMouseOver(project)}
                                        onMouseOut={handleMouseOut}
                                        href={project.page}
                                        target={project.page[0] == "/" ? "_self" : "_blank"}>

                                        {content}

                                    </Link>
                                    
                                : 

                                    <div className={`group cursor-help flex transition duration-500 h-auto w-full ${boxView ? 'break-inside-avoid rounded-sm flex-col hover:z-0 pb-2 -mt-1 hover:scale-[1.03]' : `flex-row hover:scale-[1.02]* py-0 h-fit -mb-1 sm:mb-0 w-min`} ${myFilters.includes('all') || myFilters.some((r:string) => project.type.includes(r)) ? (boxView ? 'flex' : 'flex visible') : (boxView ? 'hidden' : 'invisible flex')}`}
                                    onMouseOver= {() => handleMouseOver(project)}
                                    onMouseOut={handleMouseOut}>

                                        {content}
                                        
                                    </div>)
                                )
                            })
                    
                        }
                
                    </section>
                </div>))}
            </section>

            <HoverImage isHovering={isHovering} hoverContent={hoverContent} />
            
        </>
    )
}

