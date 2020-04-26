import React from 'react';
import { Card, Image, Button, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import swal from 'sweetalert';
import { withRouter } from 'react-router-dom';

/** Component for layout out a Profile Card. */
class RecipeCard extends React.Component {
  // removeContact(docID) {
  //   swal({
  //     title: 'Are you sure?',
  //     text: `Once deleted, ${this.props.recipe.title}
  //         will no longer be in your list of contacts.`,
  //     icon: 'warning',
  //     buttons: true,
  //     dangerMode: true,
  //   })
  //       .then((willDelete) => {
  //         if (willDelete) {
  //           this.props.Recipes.remove(docID);
  //           swal(`Poof! ${this.props.recipe.title} has been deleted!`, {
  //             icon: 'success',
  //           });
  //         } else {
  //           swal(`${this.props.recipe.title} is still in my-recipes!`);
  //         }
  //       });
  // }

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
          <Button inverted compact size='mini' color='purple' content='View Recipe'/>
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
