import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Messenger from './components/messenger/Messenger'
import Landing from './components/Landing'

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/messenger' component={Messenger} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
