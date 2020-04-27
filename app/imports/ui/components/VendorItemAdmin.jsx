import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (ListRecipes) table. See pages/ListStuffAdmin.jsx. */
class VendorItemAdmin extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.item.name}</Table.Cell>
          <Table.Cell>{this.props.item.quantity}</Table.Cell>
          <Table.Cell>{this.props.item.condition}</Table.Cell>
          <Table.Cell>{this.props.item.owner}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
VendorItemAdmin.propTypes = {
  item: PropTypes.object.isRequired,
};

export default VendorItemAdmin;
