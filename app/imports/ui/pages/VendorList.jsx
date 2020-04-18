import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Input, Container, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../api/vendor/Vendors';
import Vendor from '/imports/ui/components/Vendor';


/** Renders the Page for adding a document. */
class VendorList extends React.Component {

  state = { type: '', time: '' }

  handleTypeChange = (e, { value }) => this.setState({ type: value });

  handleTimeChange = (e, { value }) => this.setState({ time: value });

  render() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List of Vendors</Header>
          <Input fluid icon='search' placeholder='Search...'/>
          <Card.Group>
            {this.props.vendors.map((contact, index) => <Vendor
                    key={index}
                    contact={contact}
                    Vendors={Vendors}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
VendorList.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendors: Vendors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(VendorList);
