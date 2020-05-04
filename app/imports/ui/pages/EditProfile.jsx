import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import PropTypes from 'prop-types';
import { Grid, Loader, Header, Card, Image, Icon, Segment, Form } from 'semantic-ui-react';
import { AutoField, AutoForm, ErrorsField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import { Profiles, ProfileSchema } from '../../api/profiles/Profiles';

/** Renders the Page for editing a single document. */
class EditProfile extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { firstName, lastName, bio, picture, major, github, linkedIn, _id } = data;
    Profiles.update(_id, { $set: { firstName, lastName, bio, picture, github, linkedIn, major } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    const segmentStyle = { backgroundColor: 'rgba(0,0,0,0.5)', width: '100%' };
    const cardContentStyle1 = { backgroundColor: 'rgba(0,0,0,0.8)', width: '100%', height: '40px' };
    const cardContentStyle2 = { backgroundColor: 'rgba(0,0,0,0.01', width: '100%' };
    const cardContentStyle3 = { backgroundColor: 'rgba(0,0,0,0.05', width: '100%' };
    const iconStyle = { color: 'darkGreen' };

    return (
        <Grid container centered stackable>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2" textAlign="center">Edit Profile</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Card color='olive' centered size='tiny' raised='true'>
                <Card.Content style={ cardContentStyle1 }>
                  <Header as="h4" style={{ color: 'white' }} textAlign="center">Profile View</Header>
                </Card.Content>
                <Image src={this.props.profile.picture}/>
                <Card.Content extra style={ cardContentStyle2 }>
                  <Card.Header>{this.props.profile.firstName} {this.props.profile.lastName}</Card.Header>
                  <Card.Meta>{this.props.profile.major}</Card.Meta>
                  <Card.Description>
                    {this.props.profile.bio}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra style={ cardContentStyle3 }>
                  <div className="center aligned extra content">
                    {(this.props.profile.github !== '') ?
                        <a href={this.props.profile.github}>
                          <Icon style={ iconStyle } name='github' size='big'/>
                        </a> : ''}
                    <a href={this.props.profile.linkedIn}>
                      <Icon style={ iconStyle } name='linkedin' size='big'/>
                    </a>
                    <a href={`mailto:${this.props.profile.email}`}>
                      <Icon style={ iconStyle } name='mail square' size='big'/>
                    </a>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={10}>
              <Segment style={ segmentStyle }>
              <AutoForm schema={ProfileSchema} onSubmit={data => this.submit(data)} model={this.props.profile}>
                <Form.Group widths={'equal'}>
                  <TextField name='firstName' showInlineError={true}/>
                  <TextField name='lastName' showInlineError={true} />
                </Form.Group>
                  <TextField name='major' showInlineError={true} />
                <AutoField name='picture'/>
                <LongTextField name='bio'/>
                <AutoField name='github'/>
                <AutoField name='linkedIn'/>
                <SubmitField value='Submit'/>
              <ErrorsField/>
              </AutoForm>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditProfile.propTypes = {
  profile: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // const usr = match.params.email;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Profiles');
  return {
    profile: Profiles.findOne(),
    ready: subscription.ready(),
  };
})(EditProfile);
