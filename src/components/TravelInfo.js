import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const TravelInfo = React.createClass({
  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>Travel Info</h2>
          </Col>
        </Row>
      </Grid>
    );
  }
});

export default TravelInfo;
