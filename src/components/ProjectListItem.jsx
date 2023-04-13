import React from 'react'
import '../styles/projectListItem.scss'

export default function ProjectListItem({className, name, description, url, liveLink}) {

  return (
    <div className={className}>
      <div className="card-wrapper">
        <div className="text-details">
          <h1>{name}</h1>
          <div className="githubLink">
            <a href={url} style={{color: 'aqua'}}>Github repo link</a>
          </div>
          <div className="text-wrapper">
            <p>{description}</p>
          </div>
          <div className="liveLink">
            <iframe width='560' height='315' src={liveLink} allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
