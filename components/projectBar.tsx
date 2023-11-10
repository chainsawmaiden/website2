"use client"

import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { filters, projectsData, categories } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import HoverImage from './hoverImage';

export default function ProjectBar({exclude} : {exclude? : number}) {
    const [isHovering, setIsHovering] = useState(false as boolean);
    const [hoverContent, setHoverContent] = useState([] as any[]);

    function handleMouseOver({title, hoverImage, page, description}: {title: string, hoverImage: object, page: string, description: string}) {
        setIsHovering(true);
        setHoverContent([title, hoverImage, page!="", description]);
    }

    function handleMouseOut() {
        setIsHovering(false);
    }

    return (
        <>
            <section className='grid grid-flow-col auto-cols-auto sm:grid-flow-row sm:auto-rows-auto pt-2 px-0.5 gap-y-2'>

            {projectsData.map((project, index) => {

            const content = <>
                <p className='text-primary-300 text-[.5rem] font-normal font-abcdiatype mt-1 sm:mt-0.5 transition duration-300 w-4'>{`[${index+1 < 10 ? '0' : ''}${(index+1)}]`}</p>

                <Image 
                    src={project.displayImage}
                    alt="project image"
                    className='p-[7.5%] aspect-square object-contain w-auto transition duration-300'
                />
                                
                <p className='text-primary-100 mr-1.5 uppercase lf sm:mr-3 [overflow-wrap: break-word] transition duration-300'>{project.title}<span className='pf lowercase'>{project.description}</span></p>
            </>
                            
            return (
                                    
            project.category != "upcoming" && (project.page != "" ? 

            <Link key={index} className={`group flex transition duration-500 h-auto w-full break-inside-avoid rounded-sm flex-col hover:z-0 hover:scale-[1.03] -mt-1 `}
                onMouseOver= {() => handleMouseOver(project)}
                onMouseOut={handleMouseOut}
                href={project.page}
                target={project.page[0] == "/" ? "_self" : "_blank"}>

                {content}

            </Link>
            
            : 

            <div key={index} className={`group cursor-help flex transition duration-500 h-auto w-full break-inside-avoid rounded-sm flex-col hover:z-0 hover:scale-[1.03] -mt-1 `}
                onMouseOver= {() => handleMouseOver(project)}
                onMouseOut={handleMouseOut}>

                {content}
                                        
            </div>
            ))
            })
                    
        }
        </section>

        <HoverImage isHovering={isHovering} hoverContent={hoverContent}  /> 
    </>
    )

}
