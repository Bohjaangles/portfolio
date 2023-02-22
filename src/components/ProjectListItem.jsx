import React from 'react'
import '../styles/projectListItem.scss'

export default function ProjectListItem({className, name, description, url}) {
  return (
    <div className={className}>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{url}</p>
    </div>
  )
}
