import React from 'react'
import { shallow } from 'enzyme'
import MessageDetails from './../components/messenger/MessageDetails'

import msgs from './../../data.json'

test('MessageDetails renders correctly', () => {
  const msg = msgs.messages[0]
  const component = shallow(<MessageDetails message={msg} />)
  expect(component).toMatchSnapshot()
})
