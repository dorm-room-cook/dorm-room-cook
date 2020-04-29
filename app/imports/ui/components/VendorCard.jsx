import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Component for layout out a Recipe Card. */
class VendorCard extends React.Component {

    render() {
      return (
      <Card centered>
        <Image size='big' src={this.props.vendor.image}/>
          <Card.Content>
            <Card.Header>{this.props.vendor.name}</Card.Header>
            <Card.Meta>{this.props.vendor.hours}</Card.Meta>
            <Card.Description>
              {this.props.vendor.address}
            </Card.Description>
          </Card.Content>
      </Card>
    );
  }
}

VendorCard.propTypes = {
  vendor: PropTypes.object.isRequired,
  Vendors: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(VendorCard);
