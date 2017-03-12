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
            <Nav>
              <NavItem>home</NavItem>
              <NavItem>travel info</NavItem>
              <NavItem>registry</NavItem>
              <NavItem>faq</NavItem>
              <NavItem onClick={this.props.open}>rsvp</NavItem>
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
