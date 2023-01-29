import './WorkCardStyles.css'
import React from 'react'
import WorkCard from './WorkCard'
import ProjectCardData from './WorkCardData'
const Work = () => {
  return (
    <div className = 'work-container'>
        <h1 className = 'project-heading'>Projects.</h1>
        <div className = 'project-container'>
         {ProjectCardData.map((val,index)=>{
            return (
            <WorkCard key={index} 
            imgSrc = {val.imgSrc}
            title = {val.title}
            text = {val.text}
            source = {val.source}
            view = {val.view}
            />
            )
         })}
        </div>
    </div>
  )
}

export default Work