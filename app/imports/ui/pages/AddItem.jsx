import React from 'react';
import { Grid, Segment, Header, Checkbox } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Items, ItemSchema } from '../../api/items/Items';

/** Renders the Page for adding a document. */
class AddItem extends React.Component {

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

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Item</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={ItemSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='name'/>
                <NumField name='price'/>
                <TextField name='size'/>
                <TextField name='vendor'/>
                <Checkbox label='availability' />
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddItem;
