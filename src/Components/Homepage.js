import { React, useState, useEffect } from 'react';
import mainImg from '../assets/images/facebook.PNG';
import selfie from '../assets/images/selfie.jpg';
import burgers from '../assets/images/burgers.PNG';
import googlebooks from '../assets/images/GoogleBooks.PNG';
import resume from '../assets/resume/resume.pdf';
import { FaGithub, FaReact } from 'react-icons/fa';
import { DiJavascript1, DiPython, DiJava } from 'react-icons/di';
import {
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiNodeDotJs,
  SiJquery,
  SiLinkedin,
  SiSpring,
  SiFlask,
} from 'react-icons/si';
import { GiMustache, GiHamburgerMenu } from 'react-icons/gi';

const mailto = 'mailto:tylerpetri@hotmail.com';
const linkedin = 'https://www.linkedin.com/in/tyler-petri-051155206/';
const github = 'https://github.com/TylerPetri';
const chatch4ngif =
  'https://media.giphy.com/media/OkBZtHjfHYtAeMYyMI/giphy.gif';
const sorting = 'https://media.giphy.com/media/iwP4BHuyZMP7pfQPtr/giphy.gif';

function Homepage() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);
  const [sideNav, setSideNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function openNav() {
    setSideNav(true);
  }

  function closeNav() {
    setSideNav(false);
  }

  return (
    <>
      <div id='top'></div>
      <div className='boody'>
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
                  <SiLinkedin className='icons' id='purple' />
                </a>
              </li>
              <li className='social-item'>
                <a
                  href={github}
                  className='social-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithub className='icons' id='purple' />
                </a>
              </li>
            </ul>
          </div>
          <div className='directory'>
            <div className='nav-item'>
              <a className='nav-link' href='#bio'>
                Bio
              </a>
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
              <a className='nav-link' href='#bio' onClick={closeNav}>
                Bio
              </a>
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

        <section className='intro'>
          <h1 className='section-title title-intro'>
            Hi, I'm <span>Tyler Petri</span>
          </h1>
          <p className='subtitle subtitle-intro' id='bio'>
            Web Development
          </p>
          <img src={selfie} alt='Profile' className='my-pic' />
        </section>

        <div className='bioBox'>
          <h3 className='bioTitle'>About me</h3>
          <p>
            A Web Developer enjoying the problem-solving and looking forward to
            fun big things in the near future. With experience in Mathematics
            and being around computers most of my days, I'm eager to contribute
            strong critical thinking and problem-solving to the team through
            fabulous communication skills! These days with the little free time
            I have from practicing code, I'll be wherever there's life to crack
            a joke and enjoy the times.
          </p>
        </div>

        <div className='languages'>
          <FaGithub className='icons' />
          <DiJavascript1 className='icons' />
          <DiPython className='icons' />
          <DiJava className='icons' />
          <SiNodeDotJs className='icons' />
          <FaReact className='icons' />
          <SiFlask className='icons' />
          <SiSpring className='icons' />
          <SiMongodb className='icons' />
          <SiMysql className='icons' />
          <SiBootstrap className='icons' />
          <SiJquery className='icons' />
          <GiMustache className='icons' />
        </div>
        {windowDimensions.width > 885 ? (
          <section>
            <h1 className='projectsTitle'>Projects</h1>
            <div className='projects'>
              <div className='worklong'>
                <div className='process'>
                  <h4>MERN, API, Bcrypt, JWT, Google Books search app</h4>
                  <p>
                    {' '}
                    Google Books API search using a stylish user-interface,
                    displaying titles, images, descriptions and links to the
                    books. Signin for personal bookmarking.
                  </p>

                  <div className='gitappLinks'>
                    <a
                      href='https://github.com/TylerPetri/Google-books-search.git'
                      target='_blank'
                      rel='noreferrer'
                      className='gitlink'
                    >
                      Github repo
                    </a>
                    <a
                      href='https://googlebooksapi9000.herokuapp.com/'
                      target='_blank'
                      rel='noreferrer'
                      className='gitlink'
                    >
                      App
                    </a>
                  </div>
                </div>
                <div className='picLongCont'>
                  <a
                    href='https://googlebooksapi9000.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='imgLink'
                  >
                    <img
                      src={googlebooks}
                      alt='google-books-search'
                      className='piclong'
                    ></img>
                  </a>
                </div>
              </div>
              <div className='worklong'>
                <div className='process'>
                  <h4>Sorting Algorithms Visualized</h4>
                  <p>
                    Generate a new array and select the sorting algorithm you
                    wish to visualize!
                  </p>
                  <div className='gitappLinks'>
                    <a
                      href='https://github.com/TylerPetri/Sorting-Visualizer.git'
                      target='_blank'
                      rel='noreferrer'
                      className='gitlink'
                    >
                      Github repo
                    </a>
                    <a
                      href='https://tylerpetri.github.io/Sorting-Visualizer/'
                      target='_blank'
                      rel='noreferrer'
                      className='gitlink'
                    >
                      App
                    </a>
                  </div>
                </div>
                <div className='picLongCont'>
                  <a
                    href='https://tylerpetri.github.io/Sorting-Visualizer/'
                    target='_blank'
                    rel='noreferrer'
                    className='imgLink'
                  >
                    <img
                      src={sorting}
                      alt='sorting-visualizer'
                      className='piclong'
                    />
                  </a>
                </div>
              </div>
              <div className='worklong'>
                <div className='process'>
                  <h4>MERN socket.io Chat platform</h4>
                  <p>
                    Real-time chat rooms with a few surprises. Includes snake
                    game!
                  </p>
                  <div className='gitappLinks'>
                    <a
                      href='https://github.com/TylerPetri/chat-platform.git'
                      target='_blank'
                      rel='noreferrer'
                      className='gitlink'
                    >
                      Github repo
                    </a>
                    <a
                      href='https://chatch4n.herokuapp.com/'
                      target='_blank'
                      rel='noreferrer'
                      className='gitlink'
                    >
                      App
                    </a>
                  </div>
                </div>
                <div className='picLongCont'>
                  <a
                    href='https://chatch4n.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='imgLink'
                  >
                    <img
                      src={chatch4ngif}
                      alt='chat-platform'
                      className='piclong'
                    />
                  </a>
                </div>
              </div>
              <div className='worklong'>
                <div className='process'>
                  <h4>Handlebars & mySQL</h4>
                  <p>
                    Want a double double? Type it in the box and submit! Devour
                    or not to devour is now the question.
                  </p>
                  <div className='gitappLinks'>
                    <a
                      href='https://github.com/TylerPetri/burger.git'
                      target='_blank'
                      rel='noreferrer'
                      className='gitlink'
                    >
                      Github repo
                    </a>
                    <a
                      href='https://glacial-taiga-08008.herokuapp.com/'
                      target='_blank'
                      rel='noreferrer'
                      className='gitlink'
                    >
                      App
                    </a>
                  </div>
                </div>
                <div className='picLongCont'>
                  <a
                    href='https://glacial-taiga-08008.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={burgers} alt='burger-app' className='piclong' />
                  </a>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <h1 className='projectsTitle'>Projects</h1>
            <div className='projects'>
              <div className='work'>
                <div className='picCont'>
                  <a
                    href='https://googlebooksapi9000.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={googlebooks}
                      alt='google-books-search'
                      className='pic'
                    />
                  </a>
                </div>
                <h4>MERN, API, Bcrypt, JWT, Google Books search app</h4>
                <p>
                  {' '}
                  Google Books API search using a stylish user-interface,
                  displaying titles, images, descriptions and links to the
                  books. Signin for personal bookmarking.
                </p>
                <div className='gitappLinks'>
                  <a
                    href='https://github.com/TylerPetri/Google-books-search.git'
                    target='_blank'
                    rel='noreferrer'
                    className='gitlink'
                  >
                    Github repo
                  </a>
                  <a
                    href='https://googlebooksapi9000.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='gitlink'
                  >
                    App
                  </a>
                </div>
              </div>
              <div className='work'>
                <div className='picCont'>
                  <a
                    href='https://tylerpetri.github.io/Sorting-Visualizer/'
                    target='_blank'
                    rel='noreferrer'
                    className='imgLink'
                  >
                    <img
                      src={sorting}
                      alt='sorting-visualizer'
                      className='pic'
                    />
                  </a>
                </div>
                <h4>Sorting Algorithms Visualized</h4>
                <p>
                  Generate a new array and select the sorting algorithm you wish
                  to visualize!
                </p>
                <div className='gitappLinks'>
                  <a
                    href='https://github.com/TylerPetri/Sorting-Visualizer.git'
                    target='_blank'
                    rel='noreferrer'
                    className='gitlink'
                  >
                    Github repo
                  </a>
                  <a
                    href='https://tylerpetri.github.io/Sorting-Visualizer/'
                    target='_blank'
                    rel='noreferrer'
                    className='gitlink'
                  >
                    App
                  </a>
                </div>
              </div>
              <div className='work'>
                <div className='picCont'>
                  <a
                    href='https://chatch4n.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='imgLink'
                  >
                    <img
                      src={chatch4ngif}
                      alt='chat-platform'
                      className='pic'
                    />
                  </a>
                </div>
                <h4>MERN socket.io Chat platform</h4>
                <p>
                  Real-time chat rooms with a few surprises. Includes snake
                  game!
                </p>
                <div className='gitappLinks'>
                  <a
                    href='https://github.com/TylerPetri/chat-platform.git'
                    target='_blank'
                    rel='noreferrer'
                    className='gitlink'
                  >
                    Github repo
                  </a>
                  <a
                    href='https://chatch4n.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='gitlink'
                  >
                    App
                  </a>
                </div>
              </div>

              <div className='work'>
                <div className='picCont'>
                  <a
                    href='https://glacial-taiga-08008.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={burgers} alt='burger-app' className='pic' />
                  </a>
                </div>
                <h4>Handlebars & mySQL</h4>
                <p>
                  Want a double double? Type it in the box and submit! Devour or
                  not to devour is now the question.
                </p>
                <div className='gitappLinks'>
                  <a
                    href='https://github.com/TylerPetri/burger.git'
                    target='_blank'
                    rel='noreferrer'
                    className='gitlink'
                  >
                    Github repo
                  </a>
                  <a
                    href='https://glacial-taiga-08008.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='gitlink'
                  >
                    App
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        <footer className='footer' id='footer'>
          <div className='contact'>
            <a href={mailto} className='footer-link'>
              tylerpetri93@gmail.com
            </a>
            <div className='phone'>(514)566-5383</div>
          </div>
          <div className='copyright'>@copyright</div>
        </footer>
      </div>
    </>
  );
}

export default Homepage;
