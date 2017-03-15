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
            <Nav>
              <NavItem eventKey={0}><Link to="/">home</Link></NavItem>
              <NavItem eventKey={1}><Link to="/travel-info">travel info</Link></NavItem>
              <NavItem eventKey={2}><Link to="/registry">registry</Link></NavItem>
              <NavItem eventKey={3}><Link to="/frequently-asked-questions">faq</Link></NavItem>
              <NavItem eventKey={4} onClick={this.props.open}>rsvp</NavItem>
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
