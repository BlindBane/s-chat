import React from 'react'
import { shallow } from 'enzyme'
import Message from './../components/messenger/Message'

test('Message renders correctly', () => {
  const component = shallow(<Message />)
  expect(component).toMatchSnapshot()
})
