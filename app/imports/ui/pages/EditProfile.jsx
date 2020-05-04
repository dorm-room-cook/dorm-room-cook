import React from 'react';
import { Grid, Loader, Header, Fragment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoField, AutoForm, ErrorsField, HiddenField, SubmitField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Profiles, ProfileSchema } from '../../api/profiles/Profiles';

/** Renders the Page for editing a single document. */
class EditProfile extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { firstName, lastName, bio, major, interests,
      recipes, picture, email, linkedIn, github, _id } = data;
    Profiles.update(_id, { $set: { firstName, lastName,
        bio, major, interests, recipes, picture, email, linkedIn, github } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Edit Profile</Header>
            <AutoForm schema={ProfileSchema} onSubmit={data => this.submit(data)} model={this.props.doc}>
              <Fragment>
                <AutoField name='firstName'/>
                <AutoField name='lastName'/>
                <AutoField name='bio'/>
                <AutoField name='major'/>
                <AutoField name='interests'/>
                <AutoField name='recipes'/>
                <AutoField name='picture'/>
                <AutoField name='email'/>
                <AutoField name='linkedIn'/>
                <AutoField name='github'/>
                <AutoField name='address'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner'/>
              </Fragment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.Meteor.user();
  // Get access to Profile documents.
  const subscription = Meteor.subscribe('Profiles');
  return {
    doc: Profiles.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditProfile);
