import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

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
              onSelect={this.props.handleSelect} >
              <NavItem eventKey={0} >Home</NavItem>
              <NavItem eventKey={1} >Travel Info</NavItem>
              <NavItem eventKey={2} >Registry</NavItem>
              <NavItem eventKey={3} >FAQ</NavItem>
            </Nav>
            <Nav>
              <NavItem onClick={this.props.open}>RSVP</NavItem>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
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
