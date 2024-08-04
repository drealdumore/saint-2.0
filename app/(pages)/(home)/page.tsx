import Header from '@/components/layout/header'
import Skills from '@/components/skills'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Header/>
      <Skills/>
    </div>
  )
}

export default Home
