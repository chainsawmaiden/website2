"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import Link from 'next/link';
import Image from 'next/image';
import { filters, projectsData, categories } from '@/lib/data';

import iconList from '@/public/icons/icon-list.png'
import iconListHover from '@/public/icons/icon-list-hover.png'
import iconGrid from '@/public/icons/icon-grid.png'
import iconGridHover from '@/public/icons/icon-grid-hover.png'

export default function Hero() {
    const [isHovering, setIsHovering] = useState(false as boolean);
    const [hoverContent, setHoverContent] = useState([] as any[]);
    const [myFilters, setMyFilters] = useState(['all'] as string[]);
    const [boxView, setBoxView] = useState(false as boolean);
    const [hoverToggle, setHoverToggle] = useState(false as boolean);

    console.log('rendered')

    function handleMouseOver({title, hoverImage, page}: {title: string, hoverImage: object, page: string}) {
        setIsHovering(true);
        setHoverContent([title, hoverImage, page!=""]);
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

    function handleMouseOverToggle() {setHoverToggle(true)}
    function handleMouseOutToggle() {setHoverToggle(false)}

    function Filters() {
        return (<section className={`flex sticky justify-between px-5 sm:px-24 font-abcfavorit text-basefavorit md:text-lgfavorit min-w-min sm:items-start`}>
            <p 
                onClick={() => handleClickAll()}
                className={`underline cursor-pointer ${myFilters.includes('all') ? 'text-primary-100 hover:text-yellow-500' : 'text-yellow-600 hover:text-yellow-700'} whitespace-nowrap justify-self-center transition transition-duration-[300ms] ease-in'`}
            >{myFilters.includes('all') ? 'all ❤︎' : 'all ♡'}</p>
                    
            {filters.map((f, index) => (
                <p 
                    onClick={() => handleClick(f)}
                    className={`underline cursor-pointer ${myFilters.includes(f) ? 'text-primary-100 hover:text-yellow-500' : 'text-yellow-600 hover:text-yellow-700'} whitespace-nowrap justify-self-center transition transition-duration-[300ms] ease-in`} 
                    key={index}>{f}</p>
            ))}

            <div 
                className='hidden cursor-pointer group md:flex flex-row justify-center gap-x-0.5' 
                onClick={handleToggle}
                onMouseOver={handleMouseOverToggle}
                onMouseOut={handleMouseOutToggle}
                >
                <Image alt='v' src={boxView ? (hoverToggle ? iconListHover : iconList) : (hoverToggle ? iconGridHover : iconGrid)} className='hidden md:inline justify-self-center w-auto h-[1.05rem] transition mt-1 col-span-1'/>
                <p className='text-yellow-500 group-hover:text-yellow-700 transition font-abcdiatype text-[.5rem]'>[toggle]</p>
                
            </div>
            
        </section>)
    }

    function Label({children} : {children: React.ReactNode}) {
        return <motion.div layout> <div className="col-span-full md:col-span-1 md:flex md:flex-col-reverse md:-ml-[2rem] justify-start items-start md:-rotate-180 md:h-auto md:w-min"><p className='md:mb-1 font-abcfavorit text-basefavorit text-primary-400 uppercase md:[writing-mode:vertical-lr] whitespace-nowrap'>{children}</p></div></motion.div>
    }

    return (
        // okay basically this is so horribly coded but i'm not smart enough to do it better so here's a quick explanation

        // flex-col that goes down and displays the hero elements
        // 1. filters (+ toggle button), nested in div function to add just a tiny bit of formatting stuff
        // 2. goes through categories and for each category...
        // 3. creates a two-column table, one column with the label and the other with the items in it
        //      sidenote: if md or smaller, the label just gets added to the flex col and is placed horizontally
        // 4. sooooo bad so bad so bad but yeah thats basically what it does and then theres some other super jank stuff

        <>
            <section className='bg-yellow-200 block sticky mt-0 w-screen md:pt-0.5 -ml-10 sm:-ml-24'>
                <Filters />
                <hr className={`solid border-primary-0`}></hr>
            </section>
            <section className={`flex flex-col py-4 -mx-8 px-8 overflow-scroll scrollbar-hide ${!boxView && 'gap-y-3'}`}>

                {categories.map((category, index) => (<div key={index} className='grid md:grid-cols-[0rem_auto] auto-rows-min'>
                    
                    <Label>{category}</Label>

                    <section key={index} className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ${!boxView && 'md:grid-cols-none md:flex md:flex-wrap md:font-normal md:gap-x-4 md:justify-start md:sm:gap-x-2.5'}`}>    

                        {projectsData.map((project, index) => {

                            const contentGrid = <>
                                <p className='text-primary-300 text-[.5rem] font-normal font-abcdiatype mt-1 sm:mt-0.5 transition duration-300 w-4'>{`[${index+1 < 10 ? '0' : ''}${(index+1)}]`}</p>

                                <Image 
                                    src={project.displayImage}
                                    alt="project image"
                                    className='p-[7.5%] aspect-square object-contain w-auto transition duration-300'
                                />
                            
                                <p className='text-primary-100 mr-1.5 uppercase font-abcfavorit text-base leading-5 sm:mr-3 [overflow-wrap: break-word] transition duration-300'>{project.title}<span className='font-times normal-case'>{project.description}</span></p>
                            </>

                            const contentList = <>
                                <p className=' group-hover:text-secondary-0 text-[.5rem] text-primary-300 font-normal font-abcdiatype mt-1 sm:mt-0.5 transition duration-300 w-4'>{`[${index+1 < 10 ? '0' : ''}${(index+1)}]`}</p>

                                <p className={` group-hover:text-secondary-0 text-primary-100 whitespace-nowrap text-5xl mr-3 transition duration-300 ${index % 2 == 0 ? 'capitalize font-abcfavorit text-5xlfavorit italic mt-1' : 'uppercase font-times'}`}>{project.title}</p>

                                <Image 
                                    src={project.displayImage}
                                    alt="project image"
                                    className='sm:group-hover:invert-[100%] object-contain w-4/5 sm:w-auto mt-1 mb-0 mr-1.5 sm:mb-2 transition duration-300'
                                />
                            </>

                            const content = boxView ? <>{contentGrid}</> : <>
                                <div className='hidden md:inline-flex'>
                                    {contentList}
                                </div>

                                <div className='inline md:hidden'>
                                    {contentGrid}
                                </div>
                            </>;
                            
                            return (
                                    
                                project.category == category && (project.page != "" ? 

                                    <Link className={`group flex transition ease-in ${boxView ? 'hover:bg-yellow-100 hover:z-0 hover:scale-105 rounded-sm h-auto pb-2 break-inside-avoid w-full flex-col' : 'flex-row hover:scale-[1.02] h-12 w-auto pb-0 hover:bg-yellow-400 hover:z-10'} ${myFilters.includes('all') || myFilters.some((r:string) => project.type.includes(r)) ? (boxView ? 'block' : 'block md:visible') : (boxView ? 'hidden' : 'hidden md:invisible')}`}
                                        onMouseOver= {() => handleMouseOver(project)}
                                        onMouseOut={handleMouseOut}
                                        href={project.page}
                                        target={project.page[0] == "/" ? "_self" : "_blank"}>

                                        {content}

                                    </Link>
                                    
                                : 

                                    <div className={`group cursor-help flex transition ease-in ${boxView ? 'hover:bg-yellow-100 hover:z-0 hover:scale-105 rounded-sm h-auto pb-2 break-inside-avoid w-full flex-col' : 'flex-row hover:scale-[1.02] h-12 w-auto pb-0 hover:bg-yellow-400 hover:z-10'} ${myFilters.includes('all') || myFilters.some((r:string) => project.type.includes(r)) ? (boxView ? 'block' : 'block md:visible') : (boxView ? 'hidden' : 'hidden md:invisible')}`}
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

            <AnimatePresence>
                {isHovering && 
                    <motion.div
                        className='pointer-events-none'
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
                        transition={{ duration: 0.2 }}
                        >
                        <motion.div 
                            animate={{opacity: [1, .75]}}
                            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2}}>
                            
                            <Image
                                src={hoverContent[1]}
                                alt="project image" 
                                className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto max-w-none h-[15rem] sm:h-[30rem]'
                            />

                            <p className={`px-1  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase whitespace-nowrap z-20 ${hoverContent[2] ? 'text-base font-times text-white' : 'text-basefavorit font-abcfavorit text-primary-100 bg-secondary-0' }`}>
                                {hoverContent[2] ? 'click to open' : "PAGE COMING SOON"}
                            </p>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
            
        </>
    )
}

