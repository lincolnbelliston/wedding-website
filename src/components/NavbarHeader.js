import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class NavbarHeader extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar"
          fluid={true}
          collapseOnSelect={true}>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav activeKey={this.props.activeKey}
              onSelect={this.props.handleSelect}>
              <NavItem eventKey={0}>home</NavItem>
              <NavItem eventKey={1}>travel info</NavItem>
              <NavItem eventKey={2}>registry</NavItem>
              <NavItem eventKey={3}>faq</NavItem>
              <NavItem eventKey={4} onClick={this.props.open}>rsvp</NavItem>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
        <div style={{display: 'none'}}>
          <Link to="/" id="home">h</Link>
          <Link to="/travel-info" id="travel">t</Link>
          <Link to="/registry" id="registry">r</Link>
          <Link to="/frequently-asked-questions" id="faq">f</Link>
        </div>
      </div>
    );
  }
}

NavbarHeader.propTypes = {
  open: React.PropTypes.func,
  activeKey: React.PropTypes.number,
  handleSelect: React.PropTypes.func
};

export default NavbarHeader;
