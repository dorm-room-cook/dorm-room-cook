import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';
import StuffItem from '../components/StuffItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListVendorItems extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Stuff</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Size</Table.HeaderCell>
                <Table.HeaderCell>Vendor</Table.HeaderCell>
                <Table.HeaderCell>Availability</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Chives</Table.Cell>
                <Table.Cell>2.00</Table.Cell>
                <Table.Cell>medium</Table.Cell>
                <Table.Cell>Safeway</Table.Cell>
                <Table.Cell>Available</Table.Cell>
                <Table.Cell><Button>Edit</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Chives</Table.Cell>
                <Table.Cell>2.50</Table.Cell>
                <Table.Cell>medium</Table.Cell>
                <Table.Cell>Foodland</Table.Cell>
                <Table.Cell>Available</Table.Cell>
                <Table.Cell><Button>Edit</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Salt</Table.Cell>
                <Table.Cell>2.00</Table.Cell>
                <Table.Cell>medium</Table.Cell>
                <Table.Cell>Safeway</Table.Cell>
                <Table.Cell>Available</Table.Cell>
                <Table.Cell><Button>Edit</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Red Chili</Table.Cell>
                <Table.Cell>2.00</Table.Cell>
                <Table.Cell>medium</Table.Cell>
                <Table.Cell>Safeway</Table.Cell>
                <Table.Cell>Available</Table.Cell>
                <Table.Cell><Button>Edit</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Broccoli</Table.Cell>
                <Table.Cell>2.00</Table.Cell>
                <Table.Cell>medium</Table.Cell>
                <Table.Cell>Safeway</Table.Cell>
                <Table.Cell>Available</Table.Cell>
                <Table.Cell><Button>Edit</Button></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListVendorItems.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListVendorItems);
