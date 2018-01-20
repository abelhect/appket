// import React, {Component} from 'react';
// import {Button} from 'react-bootstrap';
var {Button} = require('react-bootstrap');
var React = require('react');
class SetTime extends React.Component{
// class SetTime extends Component{

  retrieveTime(event){
    // alert("The SetTimer button was pressed!");
    this.props.onSet(document.getElementById("set_time").value);
  }

  render(){
    return(
      <div className="setTime">
        <h2 className="subtitle">Set to <input id="set_time" type="number" placeholder=""/> minute(s)</h2>
        <Button bsStyle="primary" id="set_time_btn" className="btn" onClick={this.retrieveTime.bind(this)}>Set Timer (min)</Button>
      </div>
    )
  }
}

module.exports = SetTime;
