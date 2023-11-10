"use client"

import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion';

export default function Footer() {

  const [expand, setExpand] = useState(false);

  function handleMouseOver() {setExpand(true)}
  function handleMouseOut() {setExpand(false)}

  return (
    <footer className='pb-4 pf text-primary-400 w-screen -ml-20'>
      <p className='leading-5 px-20'>Aditya Das © 2023
      </p>
    </footer>
  )
}
