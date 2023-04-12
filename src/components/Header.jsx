import React from 'react'
import '../styles/header.scss'
import header from '../assets/header-image.jpg'

export default function Header() {
  return (
    <div className='header-wrapper'>
      <div className="header-image">
        <img src={header} alt="Image"/>
      </div>
    </div>
  )
}
