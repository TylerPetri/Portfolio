import { React, useState, useEffect } from 'react';
import selfie from '../assets/images/selfie.jpg';
import awsthoughts from '../assets/images/deepthoughts.PNG';
import resume from '../assets/resume/resume.pdf';
import { FaGithub, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import {
  SiAmazonaws,
  SiMaterialUi,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiNodeDotJs,
  SiJquery,
  SiLinkedin,
} from 'react-icons/si';
import { GiMustache, GiHamburgerMenu } from 'react-icons/gi';

const LibraryOfStoriesGIF =
  'https://media.giphy.com/media/uIJxeF9D8nQPJxrbHQ/giphy.gif';
const mailto = 'mailto:tylerpetri@hotmail.com';
const linkedin = 'https://www.linkedin.com/in/tyler-petri-051155206/';
const github = 'https://github.com/TylerPetri';
const googlebooksgif =
  'https://media.giphy.com/media/7RfKm5aARV8pN9yK2m/giphy.gif';
const AWSform = 'https://media.giphy.com/media/sm7fe9FOTpAIbXBmc3/giphy.gif';

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
          <SiNodeDotJs className='icons' />
          <FaReact className='icons' />
          <SiAmazonaws className='icons' />
          <SiMongodb className='icons' />
          <SiMysql className='icons' />
          <SiMaterialUi className='icons' />
          <SiBootstrap className='icons' />
          <SiJquery className='icons' />
          <GiMustache className='icons' />
        </div>
        {windowDimensions.width > 999 ? (
          <section>
            <h1 className='projectsTitle'>Projects</h1>
            <div className='projects'>
              <div className='worklong'>
                <div className='process'>
                  <h4>Full Stack Short Story app</h4>
                  <p style={{ height: 'max-content' }}>
                    {' '}
                    <ul>
                      <li>
                        Developed a full stack short story publishing/reading
                        website, including GSAP/loading animation.{' '}
                      </li>
                      <li>
                        DynamoDB used as main database and as session
                        authentication. Considering Redis/Memcache.{' '}
                      </li>
                      <li>
                        {' '}
                        Manually debugged through problem solving, adaptation
                        and organization.
                      </li>
                      <li>
                        Looking into making MongoDB the main database. Adding
                        features daily.
                      </li>
                    </ul>
                  </p>

                  <div className='gitappLinks'>
                    <a
                      href='https://github.com/TylerPetri/De-Fabulis.git'
                      target='_blank'
                      rel='noreferrer'
                      className='gitlink'
                    >
                      Github repo
                    </a>
                    <a
                      href='https://library-of-stories.herokuapp.com/'
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
                    href='https://library-of-stories.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='imgLink'
                  >
                    <img
                      src={LibraryOfStoriesGIF}
                      alt='library of stories'
                      className='piclong'
                      style={{ marginTop: '50px' }}
                    ></img>
                  </a>
                </div>
              </div>
              <div className='worklong'>
                <div className='process'>
                  <h4>AWS form application</h4>
                  <p id='AWSformP'>
                    <ul>
                      <li>
                        A serverless AWS form built in Reactjs using
                        Material-ui.
                      </li>
                      <li>
                        Hosted on S3 static website, utilizing
                        API-Gateway/Lambda functions for API calls connecting
                        front-end and DynamoDB.
                      </li>
                      <li>
                        Using an IAM user, assigning permissions for CORS, S3
                        and DynamoDB calls.
                      </li>
                    </ul>
                  </p>
                  <div className='gitappLinks'>
                    <a
                      href='https://github.com/TylerPetri/aws-lambda-form.git'
                      target='_blank'
                      rel='noreferrer'
                      className='gitlink'
                    >
                      Github repo
                    </a>
                    <a
                      href='http://alf-bp53.s3-website.us-east-2.amazonaws.com/'
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
                    href='http://alf-bp53.s3-website.us-east-2.amazonaws.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={AWSform}
                      alt='awsform-app'
                      className='piclong'
                      id='formGif'
                    />
                  </a>
                </div>
              </div>
              <div className='worklong'>
                <div className='process'>
                  <h4>AWS thoughts</h4>
                  <p style={{ height: '200px' }}>
                    <ul>
                      <li>
                        Developed a full stack message board in Reactjs,
                        allowing image and text upload capabilities.
                      </li>
                      <li>
                        Utilizing AWS, S3 for image bucket, DynamoDB for text
                        and EC2 Ubuntu Nginx pm2 for hosting.
                      </li>
                      <li>Tested with Insomnia.</li>
                    </ul>
                  </p>
                  <div className='gitappLinks'>
                    <a
                      href='https://github.com/TylerPetri/aws-thought.git'
                      target='_blank'
                      rel='noreferrer'
                      className='gitlink'
                    >
                      Github repo
                    </a>
                    <a
                      href='http://18.117.245.156/'
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
                    href='http://18.117.245.156/'
                    target='_blank'
                    rel='noreferrer'
                    className='imgLink'
                  >
                    <img
                      src={awsthoughts}
                      alt='aws-thoughts'
                      className='piclong'
                    />
                  </a>
                </div>
              </div>

              <div className='worklong'>
                <div className='process'>
                  <h4>MERN, API, Bcrypt, JWT, Google Books search app</h4>
                  <p style={{ height: '88px' }}>
                    {' '}
                    <ul>
                      <li>
                        Developed a UI for the google books search API with
                        user-authentication by incorporating MongoDB & animation
                        with vantajs. A Reactjs app.
                      </li>
                    </ul>
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
                      src={googlebooksgif}
                      alt='google-books-search'
                      className='piclong'
                    ></img>
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
                    href='https://library-of-stories.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={LibraryOfStoriesGIF}
                      alt='library of stories'
                      className='pic'
                    />
                  </a>
                </div>
                <h4>MERN, API, Bcrypt, JWT, Google Books search app</h4>
                <p>
                  {' '}
                  <ul>
                    <li>
                      Developed a full stack short story publishing/reading
                      website, including GSAP/loading animation.{' '}
                    </li>
                    <li>
                      DynamoDB used as main database and as session
                      authentication. Considering Redis/Memcache.{' '}
                    </li>
                    <li>
                      {' '}
                      Manually debugged through problem solving, adaptation and
                      organization.
                    </li>
                    <li>
                      Looking into making MongoDB the main database. Adding
                      features daily.
                    </li>
                  </ul>
                </p>
                <div className='gitappLinks'>
                  <a
                    href='https://github.com/TylerPetri/De-Fabulis.git'
                    target='_blank'
                    rel='noreferrer'
                    className='gitlink'
                  >
                    Github repo
                  </a>
                  <a
                    href='https://library-of-stories.herokuapp.com/'
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
                    href='http://alf-bp53.s3-website.us-east-2.amazonaws.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={AWSform} alt='awsform-app' className='pic' />
                  </a>
                </div>
                <h4>AWS form application</h4>
                <p>
                  <ul>
                    <li>
                      A serverless AWS form built in Reactjs using Material-ui.
                    </li>
                    <li>
                      Hosted on S3 static website, utilizing API-Gateway/Lambda
                      functions for API calls connecting front-end and DynamoDB.
                    </li>
                    <li>
                      Using an IAM user, assigning permissions for CORS, S3 and
                      DynamoDB calls.
                    </li>
                  </ul>
                </p>
                <div className='gitappLinks'>
                  <a
                    href='https://github.com/TylerPetri/aws-lambda-form.git'
                    target='_blank'
                    rel='noreferrer'
                    className='gitlink'
                  >
                    Github repo
                  </a>
                  <a
                    href='http://alf-bp53.s3-website.us-east-2.amazonaws.com/'
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
                    href='http://18.117.245.156/'
                    target='_blank'
                    rel='noreferrer'
                    className='imgLink'
                  >
                    <img src={awsthoughts} alt='aws-thoughts' className='pic' />
                  </a>
                </div>
                <h4>AWS thoughts</h4>
                <p>
                  <ul>
                    <li>
                      Developed a full stack message board in Reactjs, allowing
                      image and text upload capabilities.
                    </li>
                    <li>
                      Utilizing AWS, S3 for image bucket, DynamoDB for text and
                      EC2 Ubuntu Nginx pm2 for hosting.
                    </li>
                    <li>Tested with Insomnia.</li>
                  </ul>
                </p>
                <div className='gitappLinks'>
                  <a
                    href='https://github.com/TylerPetri/aws-thought.git'
                    target='_blank'
                    rel='noreferrer'
                    className='gitlink'
                  >
                    Github repo
                  </a>
                  <a
                    href='http://18.117.245.156/'
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
                    href='https://googlebooksapi9000.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={googlebooksgif}
                      alt='google-books-search'
                      className='pic'
                    />
                  </a>
                </div>
                <h4>MERN, API, Bcrypt, JWT, Google Books search app</h4>
                <p>
                  {' '}
                  <ul>
                    <li>
                      Developed a UI for the google books search API with
                      user-authentication by incorporating MongoDB & animation
                      with vantajs. A Reactjs app.
                    </li>
                  </ul>
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
