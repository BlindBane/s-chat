import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Messenger from './components/messenger/Messenger'
import Landing from './components/Landing'
import MessageDetails from './components/messenger/MessageDetails'

import messageData from './../data'

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/messenger' component={() => <Messenger messages={messageData.messages} />} />
        <Route
          path='/message/:id'
          component={(props) => <MessageDetails {...props}
            message={messageData.messages.find((msg) => props.match.params.id === msg.msgId)}
          />}
        />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
