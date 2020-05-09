import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Card, Loader, Grid, Icon, Input } from 'semantic-ui-react';
import RecipeCard from '/imports/ui/components/RecipeCard';
import { withTracker } from 'meteor/react-meteor-data';
import Fuse from 'fuse.js';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Recipes } from '../../api/recipes/Recipes';

const options = {
  minMatchCharLength: 3,
  threshold: 0.2,
  keys: [
    'name',
  ],
};

/** Renders a table containing all of the Contact documents. */
class ListRecipes extends Component {
  state = {
    search: '',
  };

  handleChange = (e, { name, value }) => {
    this.setState(
        {
          [name]: value,
        },
    );
  };

  /** Render the page once subscriptions have been received. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    /** This is used as a shortcut to just navigate back to the top of the page. */
    // eslint-disable-next-line no-undef
    const goToTop = () => window.scrollTo(0, 0);
    const fuse = new Fuse(this.props.recipes, options);
    const { search } = this.state;

    return (
        <Container style={{ padding: '5em 0em' }}>
          <Header as="h2" inverted textAlign='center'>All Recipes</Header>
          <Grid>
            <Grid.Column width={16}>
              <Input
                  icon='search' placeholder={'Filter Recipes...'}
                  style={{ borderRadius: '50%' }}
                  name='search'
                  value={this.state.search}
                  onChange={this.handleChange}
              />
            </Grid.Column>
          </Grid>
          <Card.Group>
            { this.state.search === ''
            ? this.props.recipes.map((recipe, index) => <RecipeCard
              key={index}
              recipe={recipe}
              Recipes={Recipes}/>)
            : _.pluck(fuse.search(search), 'item').map((recipe, index) => <RecipeCard
              key={index}
              recipe={recipe}
              Recipes={Recipes}
          />)}
              {/*  : */}
              {/*  <pre> */}
              {/*  {JSON.stringify(_.pluck(fuse.search(search), 'item'), null, 2)} */}
              {/* </pre>} */}
          </Card.Group>
          <a id='scrollUp' onClick={goToTop}><Icon name='angle up' inverted color='green' circular/></a>
        </Container>
    );
  }
}

/** Require an array of Recipe documents in the props. */
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
