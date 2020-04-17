import React from 'react';
import {
  Grid,
  Button,
  Header,
  Input,
  Container,
  Form,
  Checkbox,
  Card,
  Divider,
  Dropdown,
  Image,
  Icon,
} from 'semantic-ui-react';

/** Renders the Page for adding a document. */
class Recipes extends React.Component {

  state = { type: '', time: '' }

  handleTypeChange = (e, { value }) => this.setState({ type: value });

  handleTimeChange = (e, { value }) => this.setState({ time: value });

  render() {
    const numOfCards = [1, 2, 3, 4, 5, 6];
    const options = [
      { key: 'vegan', text: 'Vegan', value: 'vegan' },
      { key: 'chicken', text: 'Chicken', value: 'chicken' },
      { key: 'dessert', text: 'Dessert', value: 'dessert' },
      { key: 'snack', text: 'Snack', value: 'snack' },
      { key: 'vegetarian', text: 'Vegetarian', value: 'vegetarian' },
    ];
    return (
        <Container>
          <Header as="h2" textAlign="center">All Recipes</Header>
          <Input fluid icon='search' placeholder='Search...'/>
          <Divider/>
          <Grid container centered columns='equal'>
            <Grid.Column width={3}>
              <Header as="h4">Sort by</Header>
              <Form>
                {/*<Form.Field>*/}
                {/*  <Checkbox*/}
                {/*      radio*/}
                {/*      label="Recipe"*/}
                {/*      name="checkboxRadioGroup"*/}
                {/*      value="Recipe"*/}
                {/*      checked={this.state.type === 'Recipe'}*/}
                {/*      onChange={this.handleTypeChange}*/}
                {/*  />*/}
                {/*</Form.Field>*/}
                {/*<Form.Field>*/}
                {/*  <Checkbox*/}
                {/*      radio*/}
                {/*      label="User"*/}
                {/*      name="checkboxRadioGroup"*/}
                {/*      value="User"*/}
                {/*      checked={this.state.type === 'User'}*/}
                {/*      onChange={this.handleTypeChange}*/}
                {/*  />*/}
                {/*</Form.Field>*/}
                {/*<label>Sort by</label>*/}
                <Form.Field
                    control={Checkbox}
                    label={'flagged'}
                />
                <Form.Field
                    control={Checkbox}
                    label={'popular'}
                />
                <Form.Field>
                  <Checkbox
                      radio
                      label="Newest"
                      name="checkboxRadioGroup"
                      value="Newest"
                      checked={this.state.time === 'Newest'}
                      onChange={this.handleTimeChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                      radio
                      label="Oldest"
                      name="checkboxRadioGroup"
                      value="Oldest"
                      checked={this.state.time === 'Oldest'}
                      onChange={this.handleTimeChange}
                  />
                </Form.Field>
                <Dropdown placeholder='Keywords' search fluid multiple selection options={options}/>
                <Button>Update&nbsp;Search</Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Card.Group centered itemsPerRow={3}>
                {numOfCards.map((num) => (
                    <Card
                        key={num}
                        className='recipecard'
                        color='red'>
                      <Image src='/images/food.jpg' />
                      <Card.Content>
                        <Card.Header>Recipe</Card.Header>
                        <Card.Meta>
                          <Icon className='clock outline' />
                          <span>5-10 min</span>
                          <Icon className='food' />
                          {/*https://image.flaticon.com/icons/svg/1981/1981052.svg*/}
                          <span>5</span>
                          <Icon className='hotjar' color='red' />
                          <span>68</span>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content extra>
                        <Card.Description>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Header as='h5'>Ingredients</Header>
                        Hamburgers, Milkshake, French Fries
                      </Card.Content>
                      <Card.Content extra>
                        <Icon className='zoom' color='black'></Icon> View Directions
                      </Card.Content>
                    </Card>
                ))}
              </Card.Group>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default Recipes;
