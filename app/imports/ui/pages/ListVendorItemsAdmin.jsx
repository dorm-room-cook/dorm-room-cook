import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Items } from '../../api/items/Items';
import VendorItemAdmin from '../components/VendorItemAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListVendorItemsAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Stuff (Admin)</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Size</Table.HeaderCell>
                <Table.HeaderCell>Vendor</Table.HeaderCell>
                <Table.HeaderCell>Availability</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.items.map((item) => <VendorItemAdmin key={item._id} stuff={item} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListVendorItemsAdmin.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Items documents.
  const subscription = Meteor.subscribe('ItemsAdmin');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListVendorItemsAdmin);
