import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Card, Loader, Search, Grid, Button } from 'semantic-ui-react';
import RecipeCard from '/imports/ui/components/RecipeCard';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Recipes } from '../../api/recipes/Recipes';

/** Renders a table containing all of the Contact documents. */
class ListRecipes extends React.Component {

  state = { results: [] };

  /** Render the page once subscriptions have been received. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }
  /*
  * title
  * time
  * items - #of ingredients
  * ingredients
  * type - keyword
  * tools - like stove etc
  * servings
  * views
  * created
  */

  search = (query, filters) => {
    let resultList = [];
    const db = this.props.recipes;
    // search through the recipe database
    // check query against recipe titles
    // check against filters
    // add each match and call setResults
  }

  setResults = (results) => {
    console.log('hi there');
    if (this.state.results !== results) {
      console.log('is not equals');
      this.setState({ results });
    }
  }

  renderPage() {
    const results = this.state.results;
    this.setResults(this.props.recipes);
    console.log(this.state.results);
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>Dope</Header>
          <Grid>
            <Grid.Column width={16}>
              <Search fluid size='large'/>
            </Grid.Column>
          </Grid>
          <Card.Group>
            {results.map((recipe, index) => <RecipeCard
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
    ready: subscription.ready(),
  };
})(ListRecipes);

/** Renders the Page for adding a document. */
// class ListRecipes extends React.Component {
//
//   state = { type: '', time: '' }
//
//   handleTypeChange = (e, { value }) => this.setState({ type: value });
//
//   // handleTimeChange = (e, { value }) => this.setState({ time: value });
//
//   render() {
//     // const numOfCards = [1, 2, 3, 4, 5, 6];
//     const options = [
//       { key: 'vegan', text: 'Vegan', value: 'vegan' },
//       { key: 'chicken', text: 'Chicken', value: 'chicken' },
//       { key: 'dessert', text: 'Dessert', value: 'dessert' },
//       { key: 'snack', text: 'Snack', value: 'snack' },
//       { key: 'vegetarian', text: 'Vegetarian', value: 'vegetarian' },
//     ];
//     return (
//         <Container>
//           <Header as="h2" textAlign="center">All Recipes</Header>
//           <Input fluid icon='search' placeholder='Search...'/>
//           <Divider/>
//           <Grid container centered columns='equal'>
//             <Grid.Column width={3}>
//               <Header as="h4">Sort by</Header>
//               <Form>
//                 {/* <Form.Field> */}
//                 {/*  <Checkbox */}
//                 {/*      radio */}
//                 {/*      label="Recipe" */}
//                 {/*      name="checkboxRadioGroup" */}
//                 {/*      value="Recipe" */}
//                 {/*      checked={this.state.type === 'Recipe'} */}
//                 {/*      onChange={this.handleTypeChange} */}
//                 {/*  /> */}
//                 {/* </Form.Field> */}
//                 {/* <Form.Field> */}
//                 {/*  <Checkbox */}
//                 {/*      radio */}
//                 {/*      label="User" */}
//                 {/*      name="checkboxRadioGroup" */}
//                 {/*      value="User" */}
//                 {/*      checked={this.state.type === 'User'} */}
//                 {/*      onChange={this.handleTypeChange} */}
//                 {/*  /> */}
//                 {/* </Form.Field> */}
//                 {/* <label>Sort by</label> */}
//                 <Form.Field
//                     control={Checkbox}
//                     label={'flagged'}
//                 />
//                 <Form.Field
//                     control={Checkbox}
//                     label={'popular'}
//                 />
//                 <Form.Field>
//                   <Checkbox
//                       radio
//                       label="Newest"
//                       name="checkboxRadioGroup"
//                       value="Newest"
//                       checked={this.state.time === 'Newest'}
//                       onChange={this.handleTimeChange}
//                   />
//                 </Form.Field>
//                 <Form.Field>
//                   <Checkbox
//                       radio
//                       label="Oldest"
//                       name="checkboxRadioGroup"
//                       value="Oldest"
//                       checked={this.state.time === 'Oldest'}
//                       onChange={this.handleTimeChange}
//                   />
//                 </Form.Field>
//                 <Dropdown placeholder='Keywords' search fluid multiple selection options={options}/>
//                 <Button>Update&nbsp;Search</Button>
//               </Form>
//             </Grid.Column>
//             <Grid.Column>
//               <Card.Group centered itemsPerRow={4}>
//                 {numOfCards.map((num) => (
//                     <Card
//                         key={num}
//                         className='recipecard'
//                         color='red'>
//                       <Image size='big' src='/images/food.jpg' />
//                       <Card.Content>
//                         <Card.Header>Recipe</Card.Header>
//                         <Card.Meta>
//                           <List text-align='centered' horizontal divided>
//                             <List.Item>
//                               <List.Content>
//                                 <List.Icon inverted color='blue' name='clock outline'/>
//                                 <span>5-10</span>
//                                 <List.Description as='a'>Minutes</List.Description>
//                               </List.Content>
//                             </List.Item>
//                             <List.Item>
//                               <List.Content>
//                                 <List.Icon inverted color='red' name='food'/>
//                                 <span>5</span>
//                                 <List.Description as='a'>Items</List.Description>
//                               </List.Content>
//                             </List.Item>
//                             <List.Item>
//                               <List.Content>
//                                 <List.Icon inverted color='yellow' name='star'/>
//                                 <span>10</span>
//                                 <List.Description as='a'>Likes</List.Description>
//                               </List.Content>
//                             </List.Item>
//                           </List>
//                         </Card.Meta>
//                         <Card.Description>
//                           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                         </Card.Description>
//                       </Card.Content>
//                       <Card.Content textAlign='center' extra>
//                         <Button inverted compact size='mini' color='purple' content='Open'/>
//                       </Card.Content>
//                     </Card>
//                 ))}
//               </Card.Group>
//             </Grid.Column>
//           </Grid>
//         </Container>
//     );
//   }
// }
//
// export default ListRecipes;
//
