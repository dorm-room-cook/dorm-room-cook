import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { AutoField, ListField } from 'uniforms-unstyled';
import { AutoForm, TextField, LongTextField, SubmitField, ErrorsField, NumField } from 'uniforms-semantic';
import { Header, Container, Card, Loader, Grid, Modal, Button, Icon, Segment, Form, Image } from 'semantic-ui-react';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import RecipeCard from '/imports/ui/components/RecipeCard';
import { withTracker } from 'meteor/react-meteor-data';
import { Recipes, RecipeSchema } from '../../api/recipes/Recipes';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  image: String,
  description: String,
  time: String,
  servings: { type: Number, min: 0 },
  source: { type: String, optional: true },
  ingredients: { type: Array, minCount: 1 },
  'ingredients.$': { type: String, min: 1 },
  instructions: { type: Array, minCount: 1 },
  'instructions.$': { type: String, min: 1 },
  type: { type: Array, minCount: 1 },
  'type.$': { type: String, min: 1 },
  tools: { type: Array, minCount: 1 },
  'tools.$': { type: String, min: 1 },
  notes: { type: Array, optional: true },
  'notes.$': { type: String },
});

/** Renders a table containing all of the Contact documents. */
class MyRecipes extends Component {

  state = {
    url: '',
  };

  /** Render the page once subscriptions have been received. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Update image preview */
  handleChange = (field, value) => {
    if (field === 'image') {
      this.setState({ url: value });
    }
  }

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, image, description, time, ingredients, type, tools, servings, instructions,
    source, notes } = data;
    const owner = Meteor.user().username;
    const items = ingredients.length;

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${yyyy} / ${mm} / ${dd}`;
    const created = today;
    const updated = today;


    Recipes.insert({ name, image, description, time, items, ingredients, type, tools, servings, instructions,
          source, notes, created, updated, owner },
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
              <Modal closeIcon size='small'
                     trigger={
                       <Button icon labelPosition='left' size='small'>
                         <Icon name='add' color='red' />Add Recipe</Button>}
              >
                <Modal.Header>Add a Recipe</Modal.Header>
                <Modal.Content>


                      <AutoForm ref={ref => { fRef = ref; }}
                                schema={formSchema}
                                onChange={(field, value) => this.handleChange(field, value)}
                                onSubmit={data => this.submit(data, fRef)} >
                        {/*<Segment>
                          <Form.Group widths={'equal'}>
                            <TextField name='name' showInlineError={true} placeholder='name of recipe'/>
                            <TextField name='image' showInlineError={true} placeholder='picture URL'/>
                            <Image src={this.state.url} size='small' />
                          </Form.Group>
                          <LongTextField name='description' placeholder='Describe the recipe here'/>
                          <Form.Group widths={'equal'}>
                            <TextField name='time' showInlineError={true} placeholder='cook time (minutes)'/>
                            <NumField name='servings' showInlineError={true} placeholder='serving size'/>
                            <TextField name='source' showInlineError={true} placeholder='source url of recipe'/>
                          </Form.Group>
                          <div>please click the + to add lines, click the - to delete a line</div>
                          <Form.Group widths={'equal'}>
                            <AutoField name="type" placeholder='Breakfast, Snack, etc..'/>
                            <AutoField name="tools" placeholder='Stove, Microwave, etc..'/>
                          </Form.Group>
                          <Form.Group widths={'equal'}>
                            <AutoField name="instructions" placeholder='first.., second..'/>
                            <AutoField name="ingredients" placeholder='onions, '/>
                            <AutoField name="notes" placeholder='extra notes'/>
                          </Form.Group>
                          <SubmitField value='Submit'/>
                          <ErrorsField/>
                        </Segment>*/}
                      </AutoForm>


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
