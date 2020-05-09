import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Loader, Grid } from 'semantic-ui-react';
import FeaturedRecipeCard from '/imports/ui/components/FeaturedRecipeCard';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Recipes } from '../../api/recipes/Recipes';

class FeaturedRecipesBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: Date.now() };
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const featuredRecipes = _.sample(this.props.recipes, 3);

    return (
        <Container style={{ padding: '2.5em 0em' }}>
          <Grid>
            <Grid.Column width={1}/>
            <Grid.Column width={14}>
              <Card.Group>
                {featuredRecipes.map((recipe, index) => <FeaturedRecipeCard
                    key={index}
                    recipe={recipe}
                    Recipes={Recipes}
                />)}
              </Card.Group>
              <Grid.Column width={1}/>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

/** Require an array of Contact documents in the props. */
FeaturedRecipesBlock.propTypes = {
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
})(FeaturedRecipesBlock);
