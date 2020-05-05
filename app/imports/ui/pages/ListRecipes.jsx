import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Card, Loader, Search, Grid } from 'semantic-ui-react';
import RecipeCard from '/imports/ui/components/RecipeCard';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Recipes } from '../../api/recipes/Recipes';

/** Renders a table containing all of the Contact documents. */
class ListRecipes extends Component {

  /** Render the page once subscriptions have been received. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {

    return (
        <Container>
          <Header as="h2" textAlign="center">All Recipes</Header>
          <Grid>
            <Grid.Column width={16}>
              <Search fluid size='large' placeholder={'search by keyword(s)...'}/>
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
ListRecipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  /* Get access to recipes */
  const subscription = Meteor.subscribe('Recipes');
  return {
    recipes: Recipes.find({}).fetch(),
    // recipes: Recipes.find({ name: 'Small Batch Brownies' }).fetch(),
    ready: subscription.ready(),
  };
})(ListRecipes);
