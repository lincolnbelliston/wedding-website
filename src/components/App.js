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
      activeKey: 0,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.navLinks = {
      0:"home",
      1:"travel",
      2:"registry",
      3:"faq"
    };

    window.onpopstate = this.handleBackButton.bind(this);
  }

  handleBackButton() {
    // Tab bar UI doesn't go back with page, so rather than try to hack something
    // together, I'll just remove the tab highlight on back button
    this.setState({
      activeKey: -1
    });
  }

  handleSelect(eventKey) {
    if(eventKey != 4){
      document.getElementById(this.navLinks[eventKey]).click();
      this.setState({
        activeKey:eventKey
      });

    }

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
          <NavbarHeader open={this.open} handleSelect={this.handleSelect} activeKey={this.state.activeKey}/>
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
