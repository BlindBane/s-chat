import React from 'react'
import { shallow } from 'enzyme'
import MessageSearchBar from './../components/messenger/MessageSearchBar'

test('MessageSearchBar renders correctly', () => {
  const component = shallow(<MessageSearchBar />)
  expect(component).toMatchSnapshot()
})
