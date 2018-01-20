import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from './history';
import '../css/app.css';
import {firebaseApp} from '../firebase';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from '../reducers';
import {signInUser} from '../actions/index-actions';
import Menu from './menu';
import Market from './market';
import SignIn from './signin';
import SignUp from './signup';
import Pomodoro from './pomodoro/pomodoro';

const store = createStore(allReducers);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log('user has signed in or up', user);
    const {email} = user;
    store.dispatch(signInUser(email));
    history.push('/market');
  } else {
    // console.log('user has signed out or still needs to sign in.')
    history.replace('/signin');
  }
})

const App = (props) => (
    <div className="App">

      <Provider store={store}>
        <Router path="/" history={history}>
          <div>
            <Menu logo="Papo's AppKet"/>
            <Route path="/market" component={Market}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/pomodoro" component={Pomodoro}/>
          </div>
        </Router>
      </Provider>
      {/* <Market marketappslist={props.marketappslist}/> */}
      <p className="footer">Courtesy of Hector A. Martinez</p>
    </div>
);

export default App;
