import React from 'react'
import './CSS/Home.css'
import { TextSlide } from '../components/TextSlide/TextSlide'
import { ImageCarousel } from '../components/ImageCarousel/ImageCarousel'
import SportsCategorySection from '../components/SportsCategorySection/SportsCategorySection'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'
import Navbar from '../components/Navbar/Navbar'
export const Home= () => {
  return (
    <div className="home">
        <Navbar/>
        <TextSlide/>
        <ImageCarousel/>
        <SportsCategorySection/>
        <NewsLetter/>
    </div>
  )
}
