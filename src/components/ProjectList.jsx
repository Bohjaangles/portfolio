import React from 'react'
import ProjectListItem from './ProjectListItem'

const projArray = [
  {key: 1, name: 'test', descritption: 'test info', url: 'test url'}, 
  {key: 2, name: 'test 2', descritption: 'test info 2', url: 'test url 2'},
  {key: 3, name: 'test 3', descritption: 'test info 3', url: 'test url 3'},
  {key: 4, name: 'test 4', descritption: 'test info 4', url: 'test url 4'}
]

export default function ProjectList() {
  return (
    <div className='projectList-wrapper'>
      <h1 className='temp-title'>Project List Component</h1>
      {projArray.map(proj => {
        return (
          <ProjectListItem 
            className='projListItem'
            key={proj.key}
            name={proj.name}
            description={proj.descritption}
            url={proj.url}
          />
        )
      })}
    </div>
  )
}
