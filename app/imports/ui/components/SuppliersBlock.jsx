import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Image, Loader, Card, Icon, Grid } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Suppliers } from '../../api/vendors/Suppliers';

class SuppliersBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: Date.now() };
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const randomSuppliers = _.sample(this.props.suppliers, 6);
    const backdrop = {
      margin: '0em 0em 0em',
      padding: '5em 0em',
      backgroundImage: "url('/images/bg/bg2.jpg' ",
      width: '100%',
    };
    const cardStyle = {
      background: 'rgba(200,200,200,0.4)',
      padding: '0',
      borderRadius: '15px',
      boxShadow: 'none',
      margin: '25px',
    };

    return (
        // <Container style={backdrop}>
        <Grid centered stackable style={backdrop}>
          <Grid.Column width={12}>
            <Card.Group centered>
              {randomSuppliers.map((supplier, index) => <Card
                  style={cardStyle}
                  key={index}>
                <Card.Content>
                  <Image
                      floated='right'
                      // size='small'
                      rounded
                      style={{ height: '40px', width: '40px' }}
                      src={supplier.image}
                  />
                  <Card.Header content={supplier.supplier}/>
                  <Icon name='map marker' size='small' color='blue'/>{supplier.location}
                </Card.Content>
              </Card>)}
            </Card.Group>
          </Grid.Column>
        </Grid>
        // </Container>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
