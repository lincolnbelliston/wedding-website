import React, {PropTypes} from 'react';
//import NavbarHeader from './NavbarHeader';
//import RSVPForm from './RSVPForm';
//import {Grid, Row, Col} from 'react-bootstrap';

/*
const App = React.createClass({
  getInitialState() {
    return {
      showRSVPModal: false
    };
  },


  close() {
    this.setState({ showRSVPModal: false});
  },

  open() {
    this.setState({ showRSVPModal: true});
  },

  render() {
    return (
      <div>
        <NavbarHeader open={this.open} />
        <Grid>
          <Row>
            <Col xs={12}>
              <RouteHandler />
            </Col>
          </Row>
        </Grid>
        <RSVPForm showRSVPModal={this.state.showRSVPModal}
          close={this.close}/>
      </div>
    );
  }
});
*/
class App extends React.Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );

  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
