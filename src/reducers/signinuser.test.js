import * as constants from '../actions/constants';
import userReducer from './signinuser';

describe('userReducer', ()=>{
    it('should return the initial state', ()=>{
      expect(userReducer(undefined,{})).toEqual("");
    });

    it('sets the user', ()=>{
      const user = "mockemail@hotmail.com";
      expect(userReducer(null, {type: constants.SIGNED_IN, user}))
      .toEqual(user);
    });
});
