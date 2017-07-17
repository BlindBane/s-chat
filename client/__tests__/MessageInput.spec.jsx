import React from 'react'
import { shallow } from 'enzyme'
import MessageInput from './../components/messenger/MessageInput'

test('MessageInput renders correctly', () => {
  const component = shallow(<MessageInput />)
  expect(component).toMatchSnapshot()
})
