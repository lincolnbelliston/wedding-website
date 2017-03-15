import React, {PropTypes} from 'react';
import NavbarHeader from './NavbarHeader';
import RSVPForm from './RSVPForm';
import {Grid, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import TravelInfo from './TravelInfo';
import Registry from './Registry';
import Faq from './Faq';


class App extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      showRSVPModal: false,
      activeKey: 0
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showRSVPModal: false});
  }

  open() {
    this.setState({ showRSVPModal: true});
  }

  render() {
    return (
      <Router>
        <div>
          <NavbarHeader open={this.open} activeKey={this.state.activeKey}/>
          <Grid>
            <Row>
              <Col xs={12}>
                <div>
                  <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/travel-info" component={TravelInfo}/>
                    <Route path="/registry" component={Registry}/>
                    <Route path="/frequently-asked-questions" component={Faq}/>
                  </div>

                </div>
              </Col>
            </Row>
          </Grid>
          <RSVPForm showRSVPModal={this.state.showRSVPModal}
            close={this.close}/>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
