import React from 'react'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function HoverImage({isHovering, hoverContent}:{isHovering: boolean, hoverContent:any[]}) {
  return (
    <AnimatePresence>
                {isHovering && 
                    <motion.div
                        className='pointer-events-none'
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
                        transition={{ duration: 0.2 }}
                        >
                        <div className='fixed flex flex-col gap-y-1 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit '>
                            <motion.div 
                                animate={hoverContent[2] || hoverContent[3] ? {opacity: [1, .75]} : {opacity: 1}}
                                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2}}
                                className='max-w-none w-auto h-[15rem] sm:h-[30rem] flex'
                                >
                                
                                <Image
                                    src={hoverContent[1]}
                                    alt="project image" 
                                    className='w-auto max-h-full h-auto self-center'
                                />

                                {(hoverContent[2] || hoverContent[3]) && <p className={`px-1 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase whitespace-nowrap z-20 ${hoverContent[2] ? 'text-base font-times text-white bg-primary-100' : 'text-basefavorit font-abcfavorit text-primary-100 bg-secondary-0' }`}>
                                    {hoverContent[2] ? 'click to open' : "PAGE COMING SOON"}
                                </p>}
                            </motion.div>

                            <p className='min-w-full px-2 hidden sm:block sm:text-center font-times text-base text-primary-100  z-50'>{hoverContent[3].substring(2)}</p>

                        </div>
                        
                        
                            
                        
                    </motion.div>
                }
            </AnimatePresence>
  )
}
