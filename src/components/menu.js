import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import '../css/menu.css';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';


class Menu extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render(){
    // console.log('user from render', user);
    return(
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home"><strong>{this.props.logo}</strong></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
          {
            this.props.state.signinReducer ?
            <Navbar.Collapse>
              <Nav>
                  <NavItem>
                    Signed in as: {this.props.state.signinReducer}
                  </NavItem>
              </Nav>
              <Nav pullRight bsStyle="pills">
                    <NavItem className="navitem" key="2" onClick={() => this.signOut()}>
                      Sign Out
                    </NavItem>
                  {/* // <NavItem className="navitem" key="1" href="/signin">
                  //   Sign In
                  // </NavItem> */}
              </Nav>
            </Navbar.Collapse>
            :
            null
          }      
      </Navbar>
    )
  }
}

Menu.propTypes = {
  logo: PropTypes.string.isRequired
};

function mapStateToProps(state){
  // const {user} = state.signinReducer;
  // console.log('user', state.signinReducer);
  return {state}
}

export default connect(mapStateToProps, null)(Menu);
