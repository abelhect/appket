import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import history from './history';
// import {Link} from 'react-router-dom';


class SignIn extends Component {
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

  signIn(){
    // console.log('this state', this.state);
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({error})
    })
  }

  historyUpdate(){
    history.replace('/signup')
  }

  render() {
    return(
      <div className="form-inline" style={{margin: '5%'}}>
        <h2 className='title'>Sign In</h2>
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
            onClick={()=> this.signIn()}>
            Sign In
          </button>
        </div>
        <div className='error-msg' style={{margin: '1%'}}>{this.state.error.message}</div>
        <a className='signup-link' onClick={() => this.historyUpdate()}>Not a member yet? Sign Up Here!</a>
      </div>
    )
  }

}

export default SignIn;