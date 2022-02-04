import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import { Route, Switch } from 'react-router-dom';


function App() {
  const URL = 'https://backend-portfolio-katie.herokuapp.com/'
  return (
    <div className='universal'>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/projects">
          <Projects URL={URL}/>
        </Route>
        <Route path="/about">
          <About URL={URL}/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
