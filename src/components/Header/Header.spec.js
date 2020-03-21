import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from './../../utils'
import Header from '../Header'

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />)
  return component
}

describe('Header Component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'headerComponent')
    expect(wrapper.length).toBe(1)
  })

  it('Should render a logo', () => {
    const wrapper = findByTestAttr(component, 'logoImg')
    expect(wrapper.length).toBe(1)
  })
})
