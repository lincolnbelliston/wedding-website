import React from 'react';
import NavbarHeader from './NavbarHeader';
import Content from './Content';
import RSVPForm from './RSVPForm';
import Home from './Home';
import TravelInfo from './TravelInfo';
import Registry from './Registry';
import Faq from './Faq';

const App = React.createClass({
  getInitialState() {
    return {
      activeKey: 0,
      activeContent: this.getActiveContent(0),
      showRSVPModal: false
    };
  },

  handleSelect(eventKey) {
      this.setState({
          activeKey: eventKey,
          activeContent: this.getActiveContent(eventKey)
      });
  },

  getActiveContent(activeKey) {
    let activeContent;
    switch(activeKey) {
      case 0:
        activeContent = <Home />;
        break;
      case 1:
        activeContent = <TravelInfo />;
        break;
      case 2:
        activeContent = <Registry />;
        break;
      case 3:
        activeContent = <Faq />;
        break;
      case 4:
        activeContent = this.state.activeContent;
        break;
    }
    return activeContent;
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
        <NavbarHeader open={this.open}
        handleSelect={this.handleSelect}
        activeKey={this.state.activeKey}/>
        <Content activeContent={this.state.activeContent}/>
        <RSVPForm showRSVPModal={this.state.showRSVPModal}
          close={this.close}/>
      </div>
    );
  }
});

export default App;
