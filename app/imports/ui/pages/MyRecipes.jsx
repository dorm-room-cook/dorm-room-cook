import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Card, Loader, Grid, Modal, Button, Icon } from 'semantic-ui-react';
import { AutoForm } from 'uniforms-semantic';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import RecipeCard from '/imports/ui/components/RecipeCard';
import { withTracker } from 'meteor/react-meteor-data';
import { Recipes, RecipeSchema } from '../../api/recipes/Recipes';

/** Renders a table containing all of the Contact documents. */
class MyRecipes extends React.Component {

  /** Render the page once subscriptions have been received. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { title, image, description, time, items, ingredients, type, tools, servings, instructions,
    source, views, notes, created, updated } = data;
    const owner = Meteor.user().username;
    Recipes.insert({ title, image, description, time, items, ingredients, type, tools, servings, instructions,
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
        <Container>
          <Header as="h2" textAlign="center" inverted>My Recipes</Header>
          <Grid>
            <Grid.Column width={16}>
              <Grid.Row text-align='centered'>
              <Modal fluid basic closeIcon size='small'
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
