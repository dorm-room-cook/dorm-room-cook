import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Card, Loader, Search, Grid } from 'semantic-ui-react';
import VendorCard from '/imports/ui/components/VendorCard';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../api/vendors/Vendors';

/** Renders a table containing all of the Contact documents. */
class ListVendors extends React.Component {

  /** Render the page once subscriptions have been received. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {

    return (
        <Container>
          <Header as="h2" textAlign="center">Search Vendors</Header>
          <Grid>
            <Grid.Column width={16}>
              <Search fluid size='large'/>
            </Grid.Column>
          </Grid>
          <Card.Group>
            {this.props.vendors.map((vendor, index) => <VendorCard
                key={index}
                vendor={vendor}
                Vendors={Vendors}
            />)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Contact documents in the props. */
ListVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  /* Get access to recipes */
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendors: Vendors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListVendors);
