import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../Footer'
import { captionHeading1 } from './UrduGuidesData'
import { captionDescription1 } from './UrduGuidesData'
import { heading1 } from './UrduGuidesData'
import { topImage1 } from './UrduGuidesData'
import { continentsImages } from './UrduGuidesData'
import { captionHeading2 } from './UrduGuidesData'
import { heading2 } from './UrduGuidesData'
import { captionDescription2 } from './UrduGuidesData'
import { topImage2 } from './UrduGuidesData'
import { continentHeading } from './UrduGuidesData'
import { seriesHeading } from './UrduGuidesData'
import { continentsImages2 } from './UrduGuidesData'
import TopUrduGuides from './TopUrduGuides/TopUrduGuides'


export default function UrduGuides() {

  return (
    <>
     <Navbar/>
    <TopUrduGuides topImage1 = {topImage1} continentsImages={continentsImages} captionHeading = {captionHeading1} heading = {heading1} captionDescription ={captionDescription1}  continentHeading={continentHeading}/>
    <TopUrduGuides topImage1 = {topImage2} continentsImages={continentsImages2} captionHeading = {captionHeading2} heading = {heading2} captionDescription ={captionDescription2}  continentHeading={seriesHeading}/>
    <Footer/>
    </>
  )
}
