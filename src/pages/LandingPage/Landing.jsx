import React from 'react'
import Content from '../../components/Content/Content'
import IconDisplay from '../../components/IconDisplay/IconDisplay'

const Landing = () => {
  return (
    <div className='flex flex-col gap-10 py-8 overflow-hidden md:pl-10 md:gap-32'>
      <div className="relative flex flex-col items-center gap-5 text-center md:justify-start md:flex-row md:text-start">
        <Content Title={'TRENDLES'} content={'The Trendles Club organizes and promotes various personality building activities and provides enough avenues under multiple domains to students to facilitate the pursuit of their dreams. '} />
        <div className="m-5 md:absolute md:-right-36 md:-top-10">
          <IconDisplay />
        </div>
      </div>
      <div className='flex items-center justify-center text-center md:justify-start md:text-start'>
        <Content Title={'WE ARE ALL ABOUT SOCIAL'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu at facilisi nisi posuere justo. Risus interdum neque vivamus pellentesque. Blandit cursus massa eu quam. Adipiscing a phasellus blandit elementum.'} />
      </div>
      <div className="flex items-center justify-center text-center md:text-start md:justify-end">
        <Content Title={'WE ARE ALL ABOUT SOCIAL'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu at facilisi nisi posuere justo. Risus interdum neque vivamus pellentesque. Blandit cursus massa eu quam. Adipiscing a phasellus blandit elementum.'} />
      </div>
    </div>
  )
}

export default Landing