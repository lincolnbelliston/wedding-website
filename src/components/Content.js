import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Content extends Component {
  render() {
    return(
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="content">
                {this.props.activeContent}
              </div>
            </Col>
          </Row>
        </Grid>
    );
  }

}

Content.propTypes = {
  activeContent: React.PropTypes.element
};


export default Content;
