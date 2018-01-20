import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from './history';
import '../css/market.css';

// import PropTypes from 'prop-types';
import '../images/shoppingcart_thumb.png';
import '../images/reminderpro_thumb.png';
import '../images/pomodorotimer_thumb.png';
import '../images/goalcoach_thumb.png';

export class Market extends Component {
  // constructor(props){
  //   super(props)
  // }

  historyUpdate(link){
    switch(link){
      case '/pomodoro':
        link = history.replace('/pomodoro');
        break;
        case '/shoppingcart':
          link = history.replace('/shoppingcart');
          break;
          case '/goalcoach':
            link = history.replace('/goalcoach');
            break;
            default: return link;
    }
    return link;
  }

  render(){

    return(
      <Grid>
        <p className="App-intro">
          <em>Welcome to Papo’s App Marketplace,
          where you will find a library of web and mobile applications
          that will make your life easier.</em>
        </p>
        <Row className="app-row">
          {

            this.props.list.map((app, index) => {
              return(
                  <Col className="app-col" xs={12} sm={6} md={3} key={index} >
                    <Button bsSize="large" onClick={() => this.historyUpdate(app.link)}>{app.name}</Button>
                    {/* <Thumbnail alt={app.name} key={index} src={app.thumbnail} onClick={history.replace(app.link)}/> */}
                  </Col>
              )
            })
          }
        </Row>
      </Grid>
    )
  }
}

//onClick={this.historyUpdate(app.link)}
// export const Market = (props) => (
//     <Grid>
//       <p className="App-intro">
//         <em>Welcome to Papo’s App Marketplace,
//         where you will find a library of web and mobile applications
//         that will make your life easier.</em>
//       </p>
//       <Row className="app-row">
//         {
//           props.list.map((app, index) => {
//             return(
//                 <Col className="app-col" xs={12} sm={6} md={3} key={index} >
//                   <Thumbnail href="#" alt={app.name} key={index} src={app.thumbnail} onClick={app.link}/>
//                 </Col>
//             )
//           })
//         }
//       </Row>
//     </Grid>
//
// );

// Market.propTypes = {
//   marketappslist: PropTypes.array.isRequired
// }

function mapStateToProps(state){
  return{
    list: state.list
  };
}

export default connect(mapStateToProps)(Market);
