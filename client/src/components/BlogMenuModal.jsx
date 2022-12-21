import React from 'react'
import BlogMenuModalBody from './BlogMenuModalBody'
import '../styles/MenuModal.css'

const BlogMenuModal = ({isModalOpen}) => {
  return (
    <div className={`menu-modal ${isModalOpen ? 'active-menu-modal' : ''}`}>
      <BlogMenuModalBody />
  </div>
  )
}

export default BlogMenuModal
