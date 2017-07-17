import React from 'react'
import { shallow } from 'enzyme'
import MessageBox from './../components/messenger/MessageBox'

import msgs from './../../data.json'

test('MessageBox renders correctly', () => {
  const searchTerm = ''
  const component = shallow(<MessageBox messages={msgs.messages} searchTerm={searchTerm} />)
  expect(component).toMatchSnapshot()
})
