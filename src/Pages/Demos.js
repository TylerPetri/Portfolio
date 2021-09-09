import { useState } from 'react';

import { ImArrowLeft } from 'react-icons/im';
import Nav from '../Components/nav';
import SnakeGame from '../Components/Snake_Game/Start/Start';
import SortingVisualizer from '../Components/Sorting_Visualizer/SortingVisualizer/SortingVisualizer';
import './Demos.css';

const Features = () => {
  const [features, setFeature] = useState('selectFeature');

  const featureSet = (option) => {
    setFeature(option);
  };

  return (
    <>
      <div className='featuresWrapper'>
        <Nav />
        <div className='sidebarContainer'>
          <button
            className='sidebarBTN'
            onClick={() => featureSet('snakeGame')}
          >
            <span>Snake Game</span>
            <span>(desktop only)</span>
          </button>
          <button
            className='sidebarBTN'
            onClick={() => featureSet('sortingVisualizer')}
          >
            Sorting Visualizer
          </button>
        </div>
        <div
          className={
            features !== 'snakeGame' ? 'featuresContainer' : 'featuresSnake'
          }
        >
          <div
            className={
              features === 'selectFeature' ? 'selectFeature' : 'featureSelected'
            }
          >
            <ImArrowLeft /> <br></br>{' '}
            <h5>Click on any of the demos on the sidebar to view them.</h5>
            <br></br>
            <h5>Please note that these demos work best on a desktop.</h5>
          </div>
          <div
            className={
              features === 'snakeGame'
                ? 'snakeGameFeature'
                : 'noSnakeGameFeature'
            }
          >
            <SnakeGame />
          </div>
          <div
            className={
              features === 'sortingVisualizer'
                ? 'sortingFeature'
                : 'noSortingFeature'
            }
          >
            <SortingVisualizer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
