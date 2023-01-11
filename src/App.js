import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import SkillDetails from './pages/SkillDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container mt-5'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/skills' component={Skills} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/skills/:id' component={SkillDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
