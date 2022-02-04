import Nav from './components/Nav';
import Skills from './pages/Skills';
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
          <About  URL={URL}/>
        </Route>
        <Route path="/projects">
          <Projects URL={URL}/>
        </Route>
        <Route path="/skills">
          <Skills/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
