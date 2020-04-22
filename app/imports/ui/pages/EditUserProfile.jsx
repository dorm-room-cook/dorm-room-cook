import React from 'react';
import { Form, Message, Button } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

/** Renders the Page for editing a single document. */
class EditUserProfile extends React.Component {

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <div>
          <Form>
            <Form.Group widths='equal' >
              <Form.Input fluid label='First name' placeholder='First name' />
              <Form.Input fluid label='Last name' placeholder='Last name' />
              <Form.Select
                  fluid
                  label='Gender'
                  options={options}
                  placeholder='Gender'
              />
            </Form.Group>
            <Form.Input label='Email' placeholder='joe@schmoe.com' />
            <Form.TextArea label='About' placeholder='Tell us more about you...' />
            <Message
                success
                header='Form Completed'
                content="You're all signed up for the newsletter"
            />
            <Button>Submit</Button>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
          </Form>
        </div>
    );
  }
}

export default EditUserProfile;
