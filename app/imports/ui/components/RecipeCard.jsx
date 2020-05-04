import React from 'react';
import { Button, Card, Image, List, Modal, Grid, Header, Form, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { _ } from 'meteor/underscore';

/** Component for layout out a Recipe Card. */
class RecipeCard extends React.Component {

    render() {
      return (
      <Card centered raised>
        <Image size='big' src={this.props.recipe.image}/>
        <Card.Content>
          <Card.Header>{this.props.recipe.name}</Card.Header>
          <Card.Meta>
            <List text-align='center' horizontal divided>
              <List.Item>
                <List.Content>
                  <List.Icon inverted color='blue' name='clock outline'/>
                  <span>{this.props.recipe.time}</span>
                  <List.Description as='a'>Minutes</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Icon inverted color='red' name='food'/>
                  <span>{this.props.recipe.items}</span>
                  <List.Description as='a'>Items</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Icon inverted color='yellow' name='star'/>
                  <span>{this.props.recipe.views}</span>
                  <List.Description as='a'>Likes</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Card.Meta>
          <Card.Description>
            {this.props.recipe.description}
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign='center' extra style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
           <Modal closeIcon
               trigger={<Button basic color='orange'>View Details</Button>}
               size='small'>
             <Modal.Content>
               <article className="text-over">
                 <figure>
                   <img src={this.props.recipe.image}/>
                   <figcaption>
                     <Header as='h2'>
                       {this.props.recipe.description}
                     </Header>
                   </figcaption>
                 </figure>
               </article>
               <Grid container centered divided inverted stackable>
                  <Grid.Row>
                    <Header className='baloo' as='h2' content={this.props.recipe.name} color='orange'/>
                  </Grid.Row>
                 <Grid.Column width={4}>
                   <Header as='h4' content='Ingredients' />
                   <Form>
                     {_.map(this.props.recipe.ingredients,
                         (ingredient, index) => <Form.Field
                             control={Checkbox}
                             label={<label>{ingredient}</label>}
                             key={index}>
                     </Form.Field>)}
                   </Form>
                 </Grid.Column>
                 <Grid.Column width={10}>
                   <Header as='h4' content='Directions' />
                   <List ordered>
                     {_.map(this.props.recipe.instructions,
                         (instruction, index) => <List.Item key={index}>{instruction}</List.Item>)}
                   </List>
                 </Grid.Column>
                 <Grid.Column width={2}>
                   <Header as='h4' content='Info' />
                   <List text-align='center' divided>
                     <List.Item>
                       <List.Content>
                         <List.Icon inverted color='blue' name='clock outline'/>
                         <span>{this.props.recipe.time}</span>
                         <List.Description as='a'>Minutes</List.Description>
                       </List.Content>
                     </List.Item>
                     <List.Item>
                       <List.Content>
                         <List.Icon inverted color='red' name='food'/>
                         <span>{this.props.recipe.items}</span>
                         <List.Description as='a'>Items</List.Description>
                       </List.Content>
                     </List.Item>
                     <List.Item>
                       <List.Content>
                         <List.Icon inverted color='yellow' name='star'/>
                         <span>{this.props.recipe.views}</span>
                         <List.Description as='a'>Likes</List.Description>
                       </List.Content>
                     </List.Item>
                   </List>
                 </Grid.Column>
               </Grid>
              </Modal.Content>
           </Modal>
        </Card.Content>
      </Card>
    );
  }
}

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  Recipes: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(RecipeCard);
