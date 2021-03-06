import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import swal from 'sweetalert';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import VendorItem from '../components/VendorItem';
import { Items } from '../../api/items/Items';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListVendorItems extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, price, size, vendor, availability } = data;
    const owner = Meteor.user().username;
    Items.insert({ name, price, size, vendor, availability, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container style={{ padding: '5em 0em' }}>
          <Header as="h2" textAlign="center">Ingredients</Header>
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
              {this.props.items.map((item) => <VendorItem key={item._id} item={item}/>)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListVendorItems.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Items');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListVendorItems);
