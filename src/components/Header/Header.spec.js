import React from 'react'
import { shallow } from 'enzyme'
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
    const wrapper = component.find(`[data-test='headerComponent']`)
    expect(wrapper.length).toBe(1)
  })

  it('Should render a logo', () => {
    const wrapper = component.find(`[data-test='logoImg']`)
    expect(wrapper.length).toBe(1)
  })
})
