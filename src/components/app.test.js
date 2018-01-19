import React from 'react';
import {shallow} from 'enzyme';
// import ReactDOM from 'react-dom';
import App from './app';
import '../setupTests';


describe('All tests for this App component', () => {
  const app = shallow(<App marketappslist={[]}/>);

  //Test#1: (visual) App renders correctly
  it('renders correctly', ()=>{
    expect(app).toMatchSnapshot();
  });
});
