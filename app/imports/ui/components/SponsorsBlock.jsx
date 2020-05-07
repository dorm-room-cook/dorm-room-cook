import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Image, Loader, Grid, List } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../api/vendors/Vendors';

class SponsorsBlock extends Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const backgroundStyle = {
      margin: '5em 0em 0em', padding: '5em 0em'
    };

    return (
        // <div style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Grid textAlign='center' style={backgroundStyle}>
            <Grid.Row textAlign='center'>
              <Grid.Column width={4}>
                <List horizontal>
                {this.props.vendors.map((vendor, index) => <List.Item key={index}>
                  <Image size='tiny' src={vendor.logo}/>
                </List.Item>)}
                </List>
              </Grid.Column>
              <Grid.Column width={8}>
                Our sponsors have given us nothing yet...but one day I'm sure they will.
              </Grid.Column>
            </Grid.Row>
          </Grid>
        // </div>
    );
  }
}

/** Require an array of Contact documents in the props. */
SponsorsBlock.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  /* Get access to recipes */
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendors: Vendors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(SponsorsBlock);
