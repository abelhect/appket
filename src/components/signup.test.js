import React from 'react';
import {shallow} from 'enzyme';
import SignUp from './signup';

describe('The SignUp Component', ()=>{
  const signup = shallow(<SignUp />);
  it('renders correctly', ()=>{
    expect(signup).toMatchSnapshot();
  });

  it('displays the title', ()=>{
    expect(signup.find('.title').text()).toEqual('Sign Up');
  });

  it('creates an input for the user email', () => {
    expect(signup.find('.form-control').exists()).toBe(true);
  });

  it('creates an input for the user password', ()=>{
    expect(signup.find('.form-control').exists()).toBe(true);
  });

  describe('performs some things when user click `Sign Up` button', ()=>{
    // beforeEach(()=> signup.find('.btn-signup').simulate('click'));
    it('creates a button for user to sign up', ()=>{
      expect(signup.find('.btn').simulate('click'));
    });
  });

//test will have to simulate an action with the updated state of the error
  // it('displays an error message when failed sign up', ()=>{
  //   expect(signup.find('.error-msg').text()).toEqual('Error Msg Placeholder!');
  // });

  // it('creates a link to `Sign In` if user is already a member', ()=>{
  //   expect(signup.find('.signin-link').text()).toEqual('Already a Member? Sign In Here!');
  // });
});
