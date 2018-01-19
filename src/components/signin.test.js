import React from 'react';
import {shallow} from 'enzyme';
import SignIn from './signin';

describe('The SignIn Component', ()=>{
  const signin = shallow(<SignIn />);
  it('renders correctly', ()=>{
    expect(signin).toMatchSnapshot();
  });

  it('displays the title', ()=>{
    expect(signin.find('.title').text()).toEqual('Sign In');
  });

  it('creates an input for the user email', () => {
    expect(signin.find('.form-control').exists()).toBe(true);
  });

  it('creates an input for the user password', ()=>{
    expect(signin.find('.form-control').exists()).toBe(true);
  });

  describe('performs some things when user click `Sign In` button', ()=>{
    // beforeEach(()=> signin.find('.btn-signin').simulate('click'));
    it('creates a button for user to sign in', ()=>{
      expect(signin.find('.btn').simulate('click'));

    });
  });

// test for error state update
  // it('displays an error message when failed sign in', ()=>{
  //   expect(signin.find('.error-msg').text()).toEqual('Error Msg Placeholder!');
  // });

  // it('creates a link to `Sign Up` if user is not a member yet', ()=>{
  //   expect(signin.find('.signup-link').text()).toEqual('Not a member yet? Sign Up Here!');
  // });
});
