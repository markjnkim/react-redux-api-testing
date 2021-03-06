// ./**tests**/reducer_test.js
import reducer from './location'
// import {initialState} from '../src/redux/reducer'


describe('location reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should handle REQUEST', () => {
   
    expect(
      reducer({
        listing: {
          selectedListing: null
        },
        location: {
          isLocation: false,
          location: null,
          regions: null,
        },
        dispatch: jest.fn(),
      },
      {
        type: 'REQUESTING'
      })
    ).toMatchSnapshot()
  })

  it('should handle RECEIVE', () => {
   
    expect(
      reducer({
        listing: {
          selectedListing: null
        },
        location: {
          isLocation: false,
          location: null,
          regions: null,
        },
        dispatch: jest.fn(),
      },
      {
        type: 'RECEIVING'
      })
    ).toMatchSnapshot()
  })
})