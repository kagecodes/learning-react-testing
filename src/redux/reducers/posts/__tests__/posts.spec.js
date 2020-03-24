import reducer from '../reducer'
import * as A from '../../../actions'

describe('Reducer', () => {
  it('Should return default state', () => {
    const newState = reducer(undefined, {})
    expect(newState).toEqual([])
  })

  it('Should return new state it receiving type', () => {
    const posts = [{ title: 'TEST 1' }, { title: 'TEST 2' }, { title: 'TEST 3' }]
    const newState = reducer(undefined, {
      type: A.GET_POSTS,
      payload: posts
    })
    expect(newState).toEqual(posts)
  })
})
