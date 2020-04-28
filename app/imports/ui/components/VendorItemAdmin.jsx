import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff (ListRecipes) table. See pages/ListVendorItemsAdmin.jsx. */
class VendorItemAdmin extends React.Component {
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
VendorItemAdmin.propTypes = {
  item: PropTypes.object.isRequired,
};

export default VendorItemAdmin;
