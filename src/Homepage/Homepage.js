import { React, useState, useEffect } from 'react';
import awsthoughts from '../assets/images/deepthoughts.PNG';

import Nav from '../Components/nav';
import Bio from '../Components/bio';
import Icons from '../Components/icons';
import Shorts from '../Components/shorts';
import Longs from '../Components/longs';

const LibraryOfStoriesGIF =
  'https://media.giphy.com/media/NlLKtzBgcezrFzYwox/giphy.gif';
const mailto = 'mailto:tylerpetri@hotmail.com';

const googlebooksgif =
  'https://media.giphy.com/media/7RfKm5aARV8pN9yK2m/giphy.gif';
const AWSform = 'https://media.giphy.com/media/sm7fe9FOTpAIbXBmc3/giphy.gif';

function Homepage() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height,
        };
      }
      setWindowDimensions(getWindowDimensions);
      console.log(windowDimensions);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div id='top'></div>
      <div className='boody'>
        <Nav />

        <Bio />

        <div className='languages'>
          <Icons />
        </div>
        {windowDimensions.width > 999 ? (
          <section>
            <h1 className='projectsTitle'>Projects</h1>
            <div className='projects'>
              <Longs
                LibraryOfStoriesGIF={LibraryOfStoriesGIF}
                AWSform={AWSform}
                awsthoughts={awsthoughts}
                googlebooksgif={googlebooksgif}
              />
            </div>
          </section>
        ) : (
          <section>
            <h1 className='projectsTitle'>Projects</h1>
            <div className='projects'>
              <Shorts
                LibraryOfStoriesGIF={LibraryOfStoriesGIF}
                AWSform={AWSform}
                awsthoughts={awsthoughts}
                googlebooksgif={googlebooksgif}
              />
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
