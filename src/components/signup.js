import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import history from './history';
// import {Link} from 'react-router-dom';


class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp(){
    // console.log('this state', this.state);
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({error})
    })
  }

  historyUpdate(){
    history.replace('/signin')
  }

  render() {
    return(
          <div className="form-inline" style={{margin: '5%'}}>
            <h2 className='title'>Sign Up</h2>
            <div className="form-group">
              <input
                className='form-control'
                type='email'
                style={{marginRight:'5px'}}
                placeholder='email'
                onChange={event => this.setState({email: event.target.value})}
               />
              <input
                className='form-control'
                type='password'
                style={{marginRight:'5px'}}
                placeholder='password'
                onChange={event => this.setState({password: event.target.value})}
              />
              <button
                className='btn btn-primary'
                onClick={()=> this.signUp()}>
                Sign Up
              </button>
            </div>
            <div className='error-msg' style={{margin: '1%'}}>{this.state.error.message}</div>
            <a className='signin-link' onClick={() => this.historyUpdate()} style={{cursor:'pointer'}}>Already a Member? Sign In Here!</a>
          </div>
    )
  }
}

export default SignUp;
