import React from 'react';
import { Button, Card, Image, List, Modal, Grid, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { _ } from 'meteor/underscore';

/** Component for layout out a Recipe Card. */
class RecipeCard extends React.Component {

    render() {
      return (
      <Card centered>
        <Image size='big' src={this.props.recipe.image}/>
        <Card.Content>
          <Card.Header>{this.props.recipe.title}</Card.Header>
          <Card.Meta>
            <List text-align='centered' horizontal divided>
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
        <Card.Content textAlign='center' extra>
           <Modal
               trigger={<Button inverted color='blue'>View Details</Button>}
               size='small'>
             <article className="text-over">
               <figure>
                 <img src={this.props.recipe.image}/>
                 <figcaption>
                   <h1>
                     {this.props.recipe.description}
                   </h1>
                 </figcaption>
               </figure>
             </article>
             <Modal.Content>
               <Grid container divided inverted stackable>
                  <Grid.Row textAlign='centered'>
                    <Header className='baloo' as='h2' content={this.props.recipe.title} color='orange'/>
                  </Grid.Row>
                 <Grid.Column width={4}>
                   <Header as='h4' content='Ingredients' />
                   <List bulleted>
                     {_.map(this.props.recipe.ingredients,
                         (ingredient, index) => <List.Item key={index}>{ingredient}</List.Item>)}
                   </List>
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
                   <List text-align='centered' divided>
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
