import React from 'react'
import '../styles/projectListItem.scss'

export default function ProjectListItem({className, name, description, url}) {

  return (
    <div className={className}>
      <div className="card-wrapper">
        <div className="text-details">
          <h1>{name}</h1>
          <div className="text-wrapper">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
