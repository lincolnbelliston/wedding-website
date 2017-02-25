import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

class RSVPForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showRSVPModal: this.props.showRSVPModal
    };
  }

  render() {

    return(
      <Modal show={this.props.showRSVPModal} onHide={this.props.close} >
        <Modal.Header closeButton />
        <Modal.Body>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScA8KwZKaSP5NhPrNUtFmnnD7qb48QJilbxh6r7WkdXYTrxEQ/viewform?embedded=true"
            width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
        </Modal.Body>

      </Modal>
    );
  }
}

RSVPForm.propTypes = {
  showRSVPModal: React.PropTypes.bool,
  onHide: React.PropTypes.func
};

export default RSVPForm;
