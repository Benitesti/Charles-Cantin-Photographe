import { useState } from "react"
import { motion } from "framer-motion"

import GridImageContainer from "./GridImageContainer"

import styles from "./PictureGrid.module.css"



const PictureGrid = ({ displayedPhotos }) => {
  const [isBlurred, setIsBlurred] = useState(false)

return (
  <div className={styles.container}>
    <div className={styles.grid}>
        {displayedPhotos.map((img, i) => (
          <GridImageContainer 
            key={i} 
            img={img}
            blur={isBlurred}
            setBlur={() => setIsBlurred(!isBlurred)} 
          />
        ))}
    </div>
    <motion.div 
      className={styles.blur} 
      initial={"false"}
      animate={{display: isBlurred ? "block" : "none"}}
      transition={{ duration: 0.8, ease: "linear"}} 
      onClick={() => setIsBlurred(!isBlurred)}
      />
  </div>  
  )
}  


export default PictureGrid