import React from 'react'
import ProjectListItem from './ProjectListItem'

const projArray = [
  {key: 1, name: 'ThreeJs-Demo', description: 'Short and sweet interactive environment showcasing skills using three js and react three fiber. In the live link, drag around the laptop. On the screen, try scrolling in or right and left click draging the screen around, the shapes are itneractable too!', url: 'https://github.com/Bohjaangles/ThreeJS-Demo', liveLink: 'https://threejs-demo-63mch1luy-bohjaangles.vercel.app/'}, 
  {key: 2, name: 'test 2', description: 'Lorem Hipsum good ole badburgers from the library of ipsum at lorem. Featuring the lightly hatted and fantastically feathered', url: 'test url 2', liveLink: 'https://youtu.be/wWywwmZysC0'},
  {key: 3, name: 'test 3', description: 'Lorem Hipsum good ole badburgers from the library of ipsum at lorem. Featuring the lightly hatted and fantastically feathered', url: 'test url 3', liveLink: 'https://www.youtube.com/watch?v=wWywwmZysC0&ab_channel=RusselMueller'},
  {key: 4, name: 'test 4', description: 'Lorem Hipsum good ole badburgers from the library of ipsum at lorem. Featuring the lightly hatted and fantastically feathered', url: 'test url 4', liveLink: 'https://www.youtube.com/watch?v=wWywwmZysC0&ab_channel=RusselMueller'}
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
            description={proj.description}
            url={proj.url}
            liveLink={proj.liveLink}
          />
        )
      })}
    </div>
  )
}
