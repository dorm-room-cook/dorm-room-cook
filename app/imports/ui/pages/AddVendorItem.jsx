import React from 'react';
import { Grid, Segment, Header, Table, Button } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Stuffs } from '../../api/stuff/Stuff';
import StuffItem from '../components/StuffItem';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  price: Number,
  size: {
    type: String,
    allowedValues: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },
});

/** Renders the Page for adding a document. */
class AddVendorItem extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, price, size } = data;
    const owner = Meteor.user().username;
    Stuffs.insert({ name, price, size, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Vendor Item</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='name'/>
                <NumField name='price' decimal={false}/>
                <SelectField name='size'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
            <Header as="h2" textAlign="center">My Vendor Items</Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Size</Table.HeaderCell>
                  <Table.HeaderCell>Edit</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Chives</Table.Cell>
                  <Table.Cell>2.00</Table.Cell>
                  <Table.Cell>medium</Table.Cell>
                  <Table.Cell><Button>Edit</Button></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Salt</Table.Cell>
                  <Table.Cell>2.00</Table.Cell>
                  <Table.Cell>medium</Table.Cell>
                  <Table.Cell><Button>Edit</Button></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Red Chili</Table.Cell>
                  <Table.Cell>2.00</Table.Cell>
                  <Table.Cell>medium</Table.Cell>
                  <Table.Cell><Button>Edit</Button></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Broccoli</Table.Cell>
                  <Table.Cell>2.00</Table.Cell>
                  <Table.Cell>medium</Table.Cell>
                  <Table.Cell><Button>Edit</Button></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddVendorItem;
