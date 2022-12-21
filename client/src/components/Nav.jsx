import React from 'react'
import { 
  StyledNav
} from '../styles';
import logo from '../assets/Screen Shot 2022-12-18 at 10.34.52 AM.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import ig from '../assets/instagram.svg'
import yt from '../assets/youtube.svg'
import tikTok from '../assets/tiktok.svg'
import BlogMenuModal from '../components/BlogMenuModal.jsx'

const Nav = ({isModalOpen, setIsModalOpen}) => {



  const openBlogMenu = () => {
    console.log('openBlogMenu triggered!');
    if(!isModalOpen) {
      setIsModalOpen(!isModalOpen)
      console.log('isModalOpenn:', isModalOpen);
    } else {
      setIsModalOpen(!isModalOpen)
      console.log('isModalOpen:', isModalOpen);
    }
  }

  return (
    <StyledNav>
      <div className="social-box">
        <ul>
          <li>
            <a href="https://www.instagram.com/bruceleean/">
              <img className='social-logo' src={ig} alt="igLogo" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCjQyhvQZSr0jGolgsQjNeqw">
              <img className='social-logo' src={yt} alt="ytLogo" />
            </a>
          </li>
          <li>
          <a href="https://www.tiktok.com/@bruceleean">
              <img className='social-logo' src={tikTok} alt="tikTokLogo" />
            </a>
          </li>
        </ul>
      </div>
      <div className="logo-box">
        <img src={logo} alt='log' />
      </div>
      <div className="menu-list">
        <ul>
          <li onClick={openBlogMenu}>
            Blog
            {
              !isModalOpen ? 
              <>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{marginLeft: '5px'}}
                />
                <BlogMenuModal 
                  isModalOpen={isModalOpen}
                />
              </>
                :
              <>
                <FontAwesomeIcon
                  icon={faAngleUp}
                  style={{marginLeft: '5px'}}
                />
                <BlogMenuModal 
                  isModalOpen={isModalOpen}
              />
              </>
              }
          </li>
          <li>
            <a href="_">About</a>
          </li>
        </ul>
      </div>
    </StyledNav>
  )
}

export default Nav
