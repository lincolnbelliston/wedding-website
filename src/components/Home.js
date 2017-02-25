import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Home = React.createClass({
  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>Home</h2>
          </Col>
        </Row>
      </Grid>
    );
  }

});

export default Home;
