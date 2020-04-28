import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VendorItem extends React.Component {
  removeItem(docID) {
    swal({
      title: 'Are you sure?',
      text: `Once deleted, ${this.props.item.name}
          will no longer be in your list of items.`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            this.props.Items.remove(docID);
            swal(`Poof! ${this.props.item.name} has been deleted!`, {
              icon: 'success',
            });
          } else {
            swal(`${this.props.item.name} is still in your list of items!`);
          }
        });
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
            <Link to={`/edititem/${this.props.item._id}`}>Edit</Link>
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
