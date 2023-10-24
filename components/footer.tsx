"use client"

import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion';

export default function Footer() {

  const [expand, setExpand] = useState(false);

  function handleMouseOver() {setExpand(true)}
  function handleMouseOut() {setExpand(false)}

  return (
    <>
      <footer className='hidden lg:block sticky mt-0 sm:mt-auto font-times font-light text-base text-primary-700* text-yellow-600 w-screen -ml-24 bg-yellow-200'>
            <hr className="solid border-primary-0 pb-2"></hr>
            <p className='mb-2 leading-5 px-24'><span className='bf'>ADITYA DAS</span> © 2023 / Coded with <span className='bf'>React, NextJS, TailwindCSS, FramerMotion, & TypeScript</span> / Fonts: <span className='bf'>ABC Favorit</span>, Times New Roman, & <span className='font-abcdiatype font-normal text-[.9rem]'>ABC Diatype</span>
            </p>
        </footer>


    <footer className='block lg:hidden sticky bottom-0 mt-auto font-times font-light text-base text-primary-700* text-yellow-600 w-screen -ml-10 sm:-ml-24 bg-yellow-200'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
    {expand ? <AnimatePresence><motion.article
    initial={{height: 30.4}}
    animate={{height: 'min-content'}}
    
    className='group '>
      <hr className="solid border-primary-0 pb-1"></hr>
      <p className='leading-5 px-10 sm:px-24'><span className='bf'>ADITYA DAS</span> © 2023</p>
      <p className='mb-1 leading-5 px-10 sm:px-24'> Coded with <span className='bf'>React, NextJS, TailwindCSS, FramerMotion, & TypeScript</span> / Fonts: <span className='bf'>ABC Favorit</span>, Times New Roman, & <span className='font-abcdiatype font-normal text-[.9rem]'>ABC Diatype</span>
      </p>
      
    </motion.article></AnimatePresence> : <motion.article
    initial={{height: 40, opacity: 0}}
    animate={{height: 'min-content', opacity: 100}}
    
    className='group'>
      <hr className="solid border-primary-0 pb-1"></hr>
      <div className='mb-1 leading-5 px-10 sm:px-24 w-full flex justify-between'>
        <p ><span className='bf'>ADITYA DAS</span> © 2023</p>
        <p className='inline sm:hidden font-abcdiatype animate-pulse bf text-xs py-1 text-yellow-450' onClick={handleMouseOut}>[tap to expand]</p>
      </div>
      
    </motion.article>

    }
    </footer>
    </>
  )
}
