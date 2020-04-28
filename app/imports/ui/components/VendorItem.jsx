import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VendorItem extends React.Component {

  removeItem(docID) {
    console.log(`item to delete is: ${docID}`);
    this.props.Items.remove(docID);
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.item.name}</Table.Cell>
          <Table.Cell>{this.props.item.price}</Table.Cell>
          <Table.Cell>{this.props.item.size}</Table.Cell>
          <Table.Cell>{this.props.item.vendor}</Table.Cell>
          <Table.Cell>{(this.props.item.availability) ? 'Yes' : 'No'}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.item._id}`}>Edit</Link>
          </Table.Cell>
          <Table.Cell>
            <Button icon
                    onClick={() => this.removeItem(this.props.item._id)}>
              <Icon name='trash'/>
            </Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
VendorItem.propTypes = {
  item: PropTypes.object.isRequired,
  Items: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(VendorItem);
