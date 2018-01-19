import React from 'react';
import '../setupTests';
import {shallow} from 'enzyme';
import {Market} from './market';

describe('All tests for the Market Component', ()=> {
  const props = {list:
    [
      {
          "name": "name 1",
          "intro": "intro 1",
          "thumbnail": "thumbnail 1"
      },
      {
          "name": "name 2",
          "intro": "intro 2",
          "thumbnail": "thumbnail 2"
      }

    ]
  };
  const market = shallow(<Market {...props}/>);

  it('renders correctly', () =>{
    expect(market).toMatchSnapshot();
  });

  it('renders the `app-row` in new Grid element', () =>{
    expect(market.find('.app-row').length).toEqual(1);
  });

  it('renders the `app-col` in new Row element', () =>{
    expect(market.find('.app-col').length).toEqual(2);
  });
});
