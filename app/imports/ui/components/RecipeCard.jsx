import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

const greenColorCode = '#376551';
/**
 * Display a single Recipe card.
 */
function RecipeCard(props) {
  const cardStyle = { border: `1px solid ${greenColorCode}` };
  return (
      <Card style={cardStyle}>
        <Card.Header>{props.Date} </Card.Header>
        <Card.Body>
          <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='100px' src={props.Media}/>
          <Card.Title style={{ color: greenColorCode }}>{props.Headline}</Card.Title>
          <Card.Text>
            {props.Text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link className={'stretched-link'} href={props.URL}>More Info {boxArrowUpRight()}</Card.Link>
        </Card.Footer>
      </Card>
  );
}

RecipeCard.propTypes = {
  Date: PropTypes.string.isRequired,
  Media: PropTypes.string.isRequired,
  Headline: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
};


import React from 'react';
import { Card, Image, Feed, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { withRouter, Link } from 'react-router-dom';
import Note from './Note';
import AddNote from './AddNote';

class Recipe extends React.Component {
  removeContact(docID) {
    swal({
      title: 'Are you sure?',
      text: `Once deleted, ${this.props.recipe.name} will no longer be in your list of recipes.`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            this.props.Contacts.remove(docID);
            swal(`Poof! ${this.props.recipe.name} has been deleted!`, {
              icon: 'success',
            });
          } else {
            swal(`${this.props.recipe.name} is still on the menu!`);
          }
        });
  }

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.contact.image}/>
            <Card.Header>{this.props.contact.firstName}{this.props.contact.lastName}</Card.Header>
            <Card.Meta>{this.props.contact.address}</Card.Meta>
            <Card.Description>{this.props.contact.description}</Card.Description>
          </Card.Content>
          <Card.Content extra><Link to={`/edit/${this.props.contact._id}`}>Edit</Link></Card.Content>
          <Card.Content extra>
            <Feed>
              {this.props.notes.map((note, index) => <Note key={index} note={note}/>)}
            </Feed>
          </Card.Content>
          <Card.Content extra>
            <AddNote owner={this.props.contact.owner} contactId={this.props.contact._id}/>
          </Card.Content>
          <Card.Content extra>
            <Button floated='right'
                    basic color='red'
                    content='Delete' onClick={() => this.removeContact(this.props.contact._id)}/>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Recipe.propTypes = {
  contact: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  Contacts: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Contact);