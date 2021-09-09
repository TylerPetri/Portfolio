import { useState } from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/resume/resume.pdf';
import { FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';

const linkedin = 'https://www.linkedin.com/in/tyler-petri-051155206/';
const github = 'https://github.com/TylerPetri';

export default function Nav() {
  const [sideNav, setSideNav] = useState(false);

  function openNav() {
    setSideNav(true);
  }

  function closeNav() {
    setSideNav(false);
  }

  return (
    <>
      <nav className='nav'>
        <a className='dev' href='#top'>
          Tyler Dev
        </a>
        <div className='gitLinkedIconsNav'>
          <ul className='social-list'>
            <li className='social-item'>
              <a
                href={linkedin}
                className='social-link'
                target='_blank'
                rel='noreferrer'
              >
                <SiLinkedin className='navIcons' id='purple' />
              </a>
            </li>
            <li className='social-item'>
              <a
                href={github}
                className='social-link'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub className='navIcons' id='purple' />
              </a>
            </li>
          </ul>
        </div>
        <div className='directory'>
          <div className='nav-item'>
            <Link to='/Portfolio' className='nav-link'>
              Home
            </Link>
          </div>
          <div className='nav-item'>
            <Link to='/demos' className='nav-link'>
              Demos
            </Link>
          </div>
          <div className='nav-item'>
            <a
              className='nav-link'
              href={resume}
              target='_blank'
              rel='noreferrer'
            >
              Resume
            </a>
          </div>
          <div className='nav-item'>
            <a className='nav-link' href='#footer'>
              Contact
            </a>
          </div>
        </div>
        <div onClick={openNav} className='hamburgerBtn'>
          <GiHamburgerMenu />
        </div>
        <div
          id='mySidenav'
          className='sidenav'
          style={{ width: sideNav ? '175px' : '0' }}
        >
          <button className='closebtn' onClick={closeNav}>
            &times;
          </button>
          <div className='nav-item'>
            <Link to='/Portfolio' className='nav-link' onClick={closeNav}>
              Home
            </Link>
          </div>
          <div className='nav-item'>
            <Link to='/demos' className='nav-link' onClick={closeNav}>
              Demos
            </Link>
          </div>
          <div className='nav-item'>
            <a
              className='nav-link'
              href={resume}
              target='_blank'
              rel='noreferrer'
              onClick={closeNav}
            >
              Resume
            </a>
          </div>
          <div className='nav-item'>
            <a className='nav-link' href='#footer' onClick={closeNav}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
