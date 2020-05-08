import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Image, Loader, Card, Icon, Container, Grid } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Suppliers } from '../../api/vendors/Suppliers';

class SuppliersBlock extends Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const randomSuppliers = _.sample(this.props.suppliers, 9);
    const backdrop = {
      margin: '0em 0em 0em',
      padding: '5em 2em',
      backgroundImage: "url('/images/bg/bg2.jpg' ",
      width: '100%',
    };
    const cardStyle = {
      background: 'white',
      padding: '0',
      borderRadius: '0',
      boxShadow: 'none',
    };

return (
    <Container style={backdrop}>
      <Grid centered stackable>
        <Grid.Column width={12}>
        <Card.Group centered>
          {randomSuppliers.map((supplier, index) => <Card
              style={cardStyle}
              key={index}>
            <Card.Content>
              <Image
                  floated='right'
                  size='mini'
                  rounded
                  style={{ height: '25px', width: '25px' }}
                  src={supplier.image}
              />
              <Card.Header content={supplier.supplier}/>
              <Icon name='map marker' size='small' color='blue'/>{supplier.location}
            </Card.Content>
          </Card>)}
        </Card.Group>
        </Grid.Column>
      </Grid>
    </Container>
    );
  }
}

/** Require an array of Contact documents in the props. */
SuppliersBlock.propTypes = {
  suppliers: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  /* Get access to recipes */
  const subscription = Meteor.subscribe('Suppliers');
  return {
    suppliers: Suppliers.find({}).fetch(),
    ready: subscription.ready(),
  };
})(SuppliersBlock);
