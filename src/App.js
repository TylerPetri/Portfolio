import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalStore';

import Homepage from './Pages/Homepage.js';
import Demos from './Pages/Demos.js';

import './App.css';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Route exact path='/Portfolio' component={Homepage} />
        <Route path='/demos' component={Demos} />
      </Router>
    </StoreProvider>
  );
}

export default App;
