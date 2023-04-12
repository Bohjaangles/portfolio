import React from 'react'
import ProjectListItem from './ProjectListItem'
import { Canvas, useFrame } from '@react-three/fiber'

const projArray = [
  {key: 1, name: 'ThreeJs-Demo', descritption: 'Short and sweet interactive environment showcasing skills using three js and react three fiber', url: 'test url 1'}, 
  {key: 2, name: 'test 2', descritption: 'Lorem Hipsum good ole badburgers from the library of ipsum at lorem. Featuring the lightly hatted and fantastically feathered', url: 'test url 2'},
  {key: 3, name: 'test 3', descritption: 'Lorem Hipsum good ole badburgers from the library of ipsum at lorem. Featuring the lightly hatted and fantastically feathered', url: 'test url 3'},
  {key: 4, name: 'test 4', descritption: 'Lorem Hipsum good ole badburgers from the library of ipsum at lorem. Featuring the lightly hatted and fantastically feathered', url: 'test url 4'}
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
