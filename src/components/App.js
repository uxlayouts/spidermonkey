import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Header from './header/Header'
import ModalContainer from './modal/ModalContainer'
import Topics from './Topics'
import Home from './home/Home'
import About from './about/About'
import SearchContainer from './SearchContainer'
import FilterContainer from './FilterContainer'
import NoMatch from './NoMatch'
import Footer from './footer/Footer'

const App = () => (
  <Router>
    <div>

      <Header />

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/search" component={SearchContainer}/>
        <Route path="/filter" component={FilterContainer}/>
        <Route path="/topics" component={Topics}/>
        <Route component={NoMatch}/>
      </Switch>

      <ModalContainer />

      <Footer />

    </div>
  </Router>
)

export default App
