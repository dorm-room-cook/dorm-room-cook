import React from 'react';
import { Grid, Button, Header, Input, Container, Form, Checkbox, Card, Divider, Dropdown } from 'semantic-ui-react';

/*
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff';
*/
/** Renders the Page for adding a document. */
class Admin extends React.Component {

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
    ]
    return (
        <Container>
          <Header as="h2" textAlign="center">Remove Posts / Users (Admin)</Header>
          <Input fluid icon='search' placeholder='Search...'/>
          <Divider/>
          <Grid container centered columns='equal'>
            <Grid.Column width={2}>
              <Header as="h4">Filters</Header>
              <Form>
                <Form.Field>
                  <Checkbox
                      radio
                      label="Recipe"
                      name="checkboxRadioGroup"
                      value="Recipe"
                      checked={this.state.type === 'Recipe'}
                      onChange={this.handleTypeChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                      radio
                      label="User"
                      name="checkboxRadioGroup"
                      value="User"
                      checked={this.state.type === 'User'}
                      onChange={this.handleTypeChange}
                  />
                </Form.Field>
                <label>Sort by</label>
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
              <Card.Group centered>
                {numOfCards.map((num) => (
                    <Card
                        key={num}
                        image='/images/food.jpg'
                        header='Recipe'
                        meta='5 - 10 mins'
                        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi expedita nobis
                          odit placeat. Dignissimos dolore nemo sint vero! Culpa distinctio doloribus dolorum facilis
                          fugiat natus neque, nihil qui veritatis vitae.'
                    />
                ))}
              </Card.Group>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default Admin;
