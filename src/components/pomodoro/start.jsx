// import React, {Component} from 'react';
var React = require('react');
var {Button} = require('react-bootstrap');

class Start extends React.Component{
// class Start extends Component{

  componentDidMount(event){
    this.props.onPress(new Date().getTime() + this.props.workingTime * 60000);
  }

  render(){
    return(
      <div className="startTime">
        <Button bsStyle="success" id="start-btn" className="btn" onClick={this.componentDidMount.bind(this)}>Start</Button>
      </div>
    )
  }
}

module.exports = Start;
