import React from 'react'
import { shallow } from 'enzyme'
import Messenger from './../components/messenger/Messenger'

test('Messenger renders correctly', () => {
  const component = shallow(<Messenger />)
  expect(component).toMatchSnapshot()
})
