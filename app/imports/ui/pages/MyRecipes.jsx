import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { ListField, ListItemField, ListAddField, NestField, AutoField } from 'uniforms-unstyled';
import { AutoForm, TextField, LongTextField, SubmitField, ErrorsField, NumField } from 'uniforms-semantic';
import { Header, Container, Card, Loader, Grid, Modal, Button, Icon, Segment, Form } from 'semantic-ui-react';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import RecipeCard from '/imports/ui/components/RecipeCard';
import { withTracker } from 'meteor/react-meteor-data';
import { Recipes, RecipeSchema } from '../../api/recipes/Recipes';

/** Renders a table containing all of the Contact documents. */
class MyRecipes extends Component {

  /** Render the page once subscriptions have been received. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, image, description, time, items, ingredients, type, tools, servings, instructions,
    source, views, notes, created, updated } = data;
    const owner = Meteor.user().username;
    Recipes.insert({ name, image, description, time, items, ingredients, type, tools, servings, instructions,
          source, views, notes, created, updated, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Recipe added successfully', 'success');
            formRef.reset();
          }
        });
  }

  renderPage() {
    let fRef = null;


    return (
        <Container style={{ padding: '5em 0em' }}>
          <Header as="h2" inverted textAlign="center">My Recipes</Header>
          <Grid>
            <Grid.Column width={16}>
              <Grid.Row text-align='centered'>
              <Modal basic closeIcon size='large'
                     trigger={
                       <Button icon labelPosition='left' size='small'>
                         <Icon name='add' color='red' />Add Recipe</Button>}
              >
                <Modal.Header>Add an item</Modal.Header>
                <Modal.Content>
                  <Card>
                    <Card.Content>
                      <AutoForm ref={ref => { fRef = ref; }}
                                schema={RecipeSchema}
                                onSubmit={data => this.submit(data, fRef)} >
                        <Segment>
                          <Form.Group widths={'equal'}>
                            <TextField name='name' showInlineError={true} placeholder='name'/>
                            <TextField name='image' showInlineError={true} placeholder='picture URL'/>
                            <TextField name='owner' showInlineError={true} placeholder='owner'/>
                          </Form.Group>
                          <LongTextField name='description' placeholder='Describe the recipe here'/>
                          <Form.Group widths={'equal'}>
                            <TextField name='time' showInlineError={true} placeholder='time'/>
                            <NumField name='items' showInlineError={true} placeholder='items'/>
                            <AutoField name="ingredients"/>
                          </Form.Group>
                          <Form.Group widths={'equal'}>
                            <AutoField name="type"/>
                            <AutoField name="tools"/>
                            <NumField name='servings' showInlineError={true} placeholder='servings'/>
                          </Form.Group>
                          <Form.Group widths={'equal'}>
                            <AutoField name="instructions"/>
                            <TextField name='source' showInlineError={true} placeholder='source'/>
                            <NumField name='views' showInlineError={true} placeholder='views'/>
                          </Form.Group>
                          <Form.Group widths={'equal'}>
                            <NumField name='rating' showInlineError={true} placeholder='ratings'/>
                            <AutoField name="notes"/>
                            <TextField name='created' showInlineError={true} placeholder='created'/>
                          </Form.Group>
                          <Form.Group widths={'equal'}>
                            <TextField name='updated' showInlineError={true} placeholder='updated'/>
                          </Form.Group>
                          <SubmitField value='Submit'/>
                          <ErrorsField/>
                        </Segment>
                      </AutoForm>
                    </Card.Content>
                  </Card>
                </Modal.Content>
              </Modal>
              </Grid.Row>
            </Grid.Column>
          </Grid>
          <Card.Group>
            {this.props.recipes.map((recipe, index) => <RecipeCard
                key={index}
                recipe={recipe}
                Recipes={Recipes}
            />)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Contact documents in the props. */
MyRecipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  /* Get access to recipes */
  const subscription = Meteor.subscribe('MyRecipes');
  return {
    recipes: Recipes.find({}).fetch(),
    ready: subscription.ready(),
  };
})(MyRecipes);
