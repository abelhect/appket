import React from 'react';
import {shallow} from 'enzyme';
import Menu from './menu';
import '../setupTests';


describe('All tests for Menu Component', () => {
  const menu = shallow(<Menu logo='logo'/>);

  //Test#1: (visual) rendering menu component
  it('renders correctly', () => {
    expect(menu).toMatchSnapshot();
  });

  //Test#2: () when you click on logo it sends you to home page

  //Test#3: () when you click on Log in it takes you to log in page

});
