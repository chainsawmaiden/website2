"use client"

import React from 'react';
import {motion} from 'framer-motion'; 

export default function Loader() {
  return (
    <motion.div 
        animate={{ color: ['#202020', '#B6B6B6']}}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1}}

        className='fixed w-min top-1/2 left-1/2 font-times text-6xl sm:text-8xl whitespace-nowrap -translate-x-1/2 -translate-y-1/2'>
        
        ♡
    </motion.div>
  )
}