import { useState, useEffect } from "react"

import Image from "next/image"
import { motion } from "framer-motion"

import styles from "./GridImageContainer.module.css"


const GridImageContainer = ({ img, blur, setBlur }) => {

  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    setWindowSize(window.screen.width)
  })

  const variants = 
  { expanded: {
      scale: 
        windowSize < 480 ? 1 : 
        windowSize < 820 ? 1.5 : 
        windowSize < 1200 ? 2 : 2.5, 
      zIndex: 1000,
    },
    normal: { scale: 1 },
    hover: { scale: 0.9 },
    duration: {transition: {duration: 0.3}}
  } 
  
  const [isExpanded, setIsExpanded] = useState(false)

  //Conditions the picture's expanded state to the grid's blur state so they both expand and reduce together
  useEffect(() => {
    if(isExpanded) {setIsExpanded(blur)}    
  }, [blur])


  const handleClick = () => {
    setIsExpanded(!isExpanded)
    setBlur()
  }
  
  return (
    <motion.div 
    className={styles.GridImageContainer}
    variants={variants}
    animate={isExpanded ? "expanded" : "normal"}
    transition={"duration"}
    onClick={handleClick}
    {...(!isExpanded && 
      {whileHover:"hover",
       whileTap: "hover",
       whileFocus: "hover"})}   //Disable the hover animation while the picture is expanded
    >
      <Image 
        className={styles.Image} 
        src= {'/' + img.photo} 
        layout="fill" 
        objectFit="cover"
        sizes="(max-width: 384px) 50vw,
              (max-width: 600px) 25vw,
              33vw" 
      />
  </motion.div> 
  )
}

export default GridImageContainer