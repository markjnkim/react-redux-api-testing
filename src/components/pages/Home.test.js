import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { spy } from 'sinon';

import * as actions from '../../actions';
import { Home } from './Home';
import { LocateButton } from '../styles';
import * as location from '../../__test__/mocks/location-mock.json';

function shallowSetup() {

  const props = {
    listing: {
      selectedListing: null
    },
    location: {
      isLocating: false,
      location: location,
      regions: null,
    },
    dispatch: jest.fn(),
  }

  const enzymeWrapper = shallow(<Home {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Shallow rendered Home', () => {
  const { enzymeWrapper, props } = shallowSetup();
  it('renders without crashing given the required props', () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot()
  });

  it('should render a Home with state', () => {

    const { enzymeWrapper } = shallowSetup();
    expect(enzymeWrapper.find('span').first().text()).toBe("  ");
    expect(enzymeWrapper.containsMatchingElement(<span>location.name</span>)).toBe(false);
    expect(enzymeWrapper.containsMatchingElement(<span> Locate Me </span>)).toBe(true);
  });

  it('locate button dispatches the correct actions', () => {

    actions.requestLocation = jest.fn();
    actions.receiveLocation = jest.fn();
    actions.error = jest.fn();
    
    // const enzymeWrapper = shallow(<Home {...props} />)

    expect(props.dispatch.mock.calls.length).toBe(0);
    expect(actions.requestLocation.mock.calls.length).toBe(0);
    expect(actions.receiveLocation.mock.calls.length).toBe(0);

  });

  it('locate button clicks', () => {

    const wrapper = shallow(<Home {...props} />)

    const button = wrapper.find(LocateButton);
    button.simulate('click');
    expect(actions.receiveLocation.mock.calls.length).toBe(0);

  });
})

describe('Shallow Locate Component', () => {
  beforeEach(() => {
    spy(Home.prototype, "locateMe");
  });
  afterEach(() => {
    Home.prototype.locateMe.restore();
  });
})