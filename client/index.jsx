import React from 'react'
import { render } from 'react-dom'

import App from './App'
import messageData from './../data'

render(<App messages={messageData.messages} />, document.getElementById('root'))
