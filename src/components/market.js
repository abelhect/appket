import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import {connect} from 'react-redux';
import '../css/market.css';
// import PropTypes from 'prop-types';
import '../images/shoppingcart_thumb.png';
import '../images/reminderpro_thumb.png';
import '../images/pomodorotimer_thumb.png';
import '../images/goalcoach_thumb.png';

export const Market = (props) => (
    <Grid>
      <p className="App-intro">
        <em>Welcome to Papo’s App Marketplace,
        where you will find a library of web and mobile applications
        that will make your life easier.</em>
      </p>
      <Row className="app-row">
        {
          props.list.map((app, index) => {
            return(
                <Col className="app-col" xs={12} sm={6} md={3} key={index} >
                  <Thumbnail href="#" alt={app.name} key={index} src={app.thumbnail}/>
                </Col>
            )
          })
        }
      </Row>
    </Grid>

);

// Market.propTypes = {
//   marketappslist: PropTypes.array.isRequired
// }

function mapStateToProps(state){
  return{
    list: state.list
  };
}

export default connect(mapStateToProps)(Market);
