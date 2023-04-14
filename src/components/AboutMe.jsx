import React from 'react'
import '../styles/aboutMe.scss'

export default function AboutMe() {
  return (
    <div className="aboutMe-wrapper">
      <div className="AMTitle">
        <h2>Russel Mueller</h2>
      </div>
      <div className="AMImage">
        <img src={null}></img>
      </div>
      <div className="AMText">
        <p>
          Hi there, I am a junior web developer from Canada. My training is in full stack web developnment, although I have interests in the 3d and animation space and enjoy working with Unity and threeJS. I was drawn into development because of my love of strategy and problem solving, and my desire to improve the world around me in a way that is ultimately scalable. As a coder, my core skills and strengths lie in my attention to detail, actual enjoymebnt of the development process and my ability to quickly learn new languages and frameworks on an as needed basis as demonstrated multiple times. In my personal life I am often found rock climbing in a gym during the week or at the crag on long weekends and I am an avid reader of science fiction. 
        </p>
      </div>
    </div>
  )
}
