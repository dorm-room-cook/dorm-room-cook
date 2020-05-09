import React, { Component } from 'react';
import {
  Card,
  Image,
  List,
  Modal,
  Grid,
  Header,
  Form,
  Checkbox,
  Dimmer,
  Divider,
  Rating,
  Responsive,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';

/** Component for layout out a Recipe Card. */
class RecipeCard extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })

  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state;
    const header = {
      color: 'rgb(255,102,0)',
      fontFamily: 'Pacifico',
      fontStyle: 'cursive',
    };
    const span = { color: 'rgb(255,102,0)' };
    const desc = { color: 'rgb(255,255,255)' };
    const directionStyle = { color: 'rgb(0,0,0)', lineHeight: '1.5em' };
    const content = (
        <Grid textAlign={'center'}>
          <Card.Content>
            <Card.Header content={this.props.recipe.name} as='h2' style={header}/>
            <Divider/>
          </Card.Content>
          <Card.Content extra>
            <Card.Meta>
              <List divided text-align='center' horizontal>
                <List.Item>
                  <List.Content>
                    <List.Icon color='blue' name='clock outline'/>
                    <span style={span}>{this.props.recipe.time}</span>
                    <List.Description style={desc}>Minutes</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Icon color='red' name='food'/>
                    <span style={span}>{this.props.recipe.items}</span>
                    <List.Description style={desc}>Ingredients</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Icon inverted color='yellow' name='star'/>
                    <span style={span}>{this.props.recipe.views}</span>
                    <List.Description style={desc}>Likes</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Card.Meta>
          </Card.Content>
        </Grid>
    );

    const dimmer = (
        <Dimmer.Dimmable
            blurring
            as={Image}
            dimmed={active}
            dimmer={{ active, content }}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
            // size='medium'
            src={this.props.recipe.image}
            rounded
        />
    );

    return (
        <Card centered style={{ background: 'rgba(200,200,200,0.8)' }}>
          <Modal closeIcon
                 trigger={<a>{dimmer}</a>}
                 size='small'
          >
            <article className="text-over">
              <figure>
                <img src={this.props.recipe.image} alt={this.props.recipe.name}/>
                <figcaption>
                  <Header as='h2'>
                    {this.props.recipe.description}
                  </Header>
                </figcaption>
              </figure>
            </article>
            <Modal.Content style={{ background: 'lightGrey' }}>
              <Grid centered divided inverted stackable>
                <Grid.Row>
                  <Header style={header} as='h2' content={this.props.recipe.name} color='orange'/>
                </Grid.Row>
                <Grid.Row>
                  <List divided text-align='center' horizontal>
                    <List.Item>
                      <List.Content>
                        <List.Icon color='blue' name='clock outline'/>
                        <span style={span}>{this.props.recipe.time}</span>
                        <List.Description style={desc}>Minutes</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Icon color='red' name='food'/>
                        <span style={span}>{this.props.recipe.items}</span>
                        <List.Description style={desc}>Ingredients</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <Rating icon='star' defaultRating={this.props.recipe.rating} maxRating={5}/>
                        <List.Description style={desc}>Rating</List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Row>
                <Responsive as={Divider} minWidth={767}/>
                <Grid.Row divided>
                  <Grid.Column width={6}>
                    <Header as='h4' content='Ingredients'/>
                    <Form>
                      {_.map(this.props.recipe.ingredients,
                          (ingredient, index) => <Form.Field
                              control={Checkbox}
                              label={<label style={{ color: 'black' }}>{ingredient}</label>}
                              key={ingredient}
                              tabindex={index}
                          >
                          </Form.Field>)}
                    </Form>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Header as='h4' content='Directions'/>
                    <List ordered>
                      {_.map(this.props.recipe.instructions,
                          (instruction, index) => <List.Item
                              style={directionStyle}
                              key={index}>
                            {/* <Label circular color='pink' content={index + 1}/> */}
                            {instruction}</List.Item>)}
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
          </Modal>
        </Card>
    );
  }
}

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  Recipes: PropTypes.object.isRequired,
};

export default RecipeCard;
