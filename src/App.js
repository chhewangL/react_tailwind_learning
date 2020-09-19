import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './views/Home'
import About from './views/About'
import Pic from './views/Pic'
import Form from './views/signupForm'
import Login from './views/Login'

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route  path="/pic/:id"><Pic/></Route>
        <Route  path="/about"><About /></Route>
        <Route path="/form"><Form/></Route>
        <Route path="/login"><Login/></Route>
      </Switch>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
