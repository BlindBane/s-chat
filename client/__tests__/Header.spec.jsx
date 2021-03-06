import React from 'react'
import { shallow } from 'enzyme'
import Header from './../components/Header'

test('Header renders correctly', () => {
  const component = shallow(<Header />)
  expect(component).toMatchSnapshot()
})
