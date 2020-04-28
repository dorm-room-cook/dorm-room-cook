import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Card, Loader, Search, Grid } from 'semantic-ui-react';
import RecipeCard from '/imports/ui/components/RecipeCard';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Recipes } from '../../api/recipes/Recipes';

/** Renders a table containing all of the Contact documents. */
class MyRecipes extends React.Component {

  /** Render the page once subscriptions have been received. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {

    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>All Recipes</Header>
          <Grid>
            <Grid.Column width={16}>
              <Search fluid size='large'/>
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
