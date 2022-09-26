import { useState, useEffect } from "react"

import Categories from "./Categories"
import PictureGrid from "./PictureGrid"

import styles from "./Gallery.module.css"


const Gallery = ({ pictures }) => {

  const [categories, setCategories] = useState([])
  const [picturesFiltered, setPicturesFiltered] = useState([...pictures])   

  useEffect(() => {

    const filtered = pictures.filter((pic) => categories.includes(pic.categories[0]))
    setPicturesFiltered(filtered)  
  }, [categories])


  const handleCategories = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories(categories.filter((categorie) => categorie !== e.target.value))
    } else {
      let newCategories = [...categories, e.target.value]
      setCategories(newCategories)
    }    
    e.target.className.includes("active") ? e.target.className ="active" : e.target.className = ""
  }



  return (
  <div>
    <Categories handleCategories={handleCategories} handleReset={() => setPicturesFiltered([...pictures])}/>
    <PictureGrid displayedPictures={picturesFiltered}/>
  </div>
  )
}


export default Gallery