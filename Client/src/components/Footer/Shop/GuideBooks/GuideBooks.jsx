import React from 'react'
import Top from './Top/Top'
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../Footer'
import { captionHeading1 } from './GuideBooksData'
import { captionDescription1 } from './GuideBooksData'
import { heading1 } from './GuideBooksData'
import { topImage1 } from './GuideBooksData'
import { continentsImages } from './GuideBooksData'
import { captionHeading2 } from './GuideBooksData'
import { heading2 } from './GuideBooksData'
import { captionDescription2 } from './GuideBooksData'
import { topImage2 } from './GuideBooksData'
import { continentHeading } from './GuideBooksData'
import { seriesHeading } from './GuideBooksData'
import { continentsImages2 } from './GuideBooksData'


export default function GuideBooks(props) {

  return (
    <>
     <Navbar/>
    <Top topImage1 = {topImage1} continentsImages={continentsImages} captionHeading = {captionHeading1} heading = {heading1} captionDescription ={captionDescription1}  continentHeading={continentHeading}/>
    <Top topImage1 = {topImage2} continentsImages={continentsImages2} captionHeading = {captionHeading2} heading = {heading2} captionDescription ={captionDescription2}  continentHeading={seriesHeading}/>
    <Footer/>
    </>
  )
}
