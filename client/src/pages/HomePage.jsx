import React from 'react'
import BlogSection from '../components/BlogSection'
import Nav from '../components/Nav'

const HomePage = ({isModalOpen, setIsModalOpen}) => {
  return (
    <div className='homepage-container'>
      <Nav 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <BlogSection />
      
    </div>
  )
}

export default HomePage
