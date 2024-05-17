import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../Footer'
import { captionHeading1 } from './EnglishGuidesData'
import { captionDescription1 } from './EnglishGuidesData'
import { heading1 } from './EnglishGuidesData'
import { topImage1 } from './EnglishGuidesData'
import { continentsImages } from './EnglishGuidesData'
import { captionHeading2 } from './EnglishGuidesData'
import { heading2 } from './EnglishGuidesData'
import { captionDescription2 } from './EnglishGuidesData'
import { topImage2 } from './EnglishGuidesData'
import { continentHeading } from './EnglishGuidesData'
import { seriesHeading } from './EnglishGuidesData'
import { continentsImages2 } from './EnglishGuidesData'
import TopEnglishBooks from './TopEnglishBooks/TopEnglishBooks'

export default function EnglishGuides(props) {

  return (
    <>
     <Navbar/>
    <TopEnglishBooks topImage1 = {topImage1} continentsImages={continentsImages} captionHeading = {captionHeading1} heading = {heading1} captionDescription ={captionDescription1}  continentHeading={continentHeading}/>
    <TopEnglishBooks topImage1 = {topImage2} continentsImages={continentsImages2} captionHeading = {captionHeading2} heading = {heading2} captionDescription ={captionDescription2}  continentHeading={seriesHeading}/>
    <Footer/>
    </>
  )
}
