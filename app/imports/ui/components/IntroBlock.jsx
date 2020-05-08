import React, { Component } from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';

class IntroBlock extends Component {

  render() {
    const headerStyle = {
      fontFamily: 'Pacifico',
      fontStyle: 'cursive',
      fontSize: '48px',
      letterSpacing: '.1em',
      color: 'rgb(255,255,255)',
      textShadow: '2px 2px rgb(123,123,123)',
    };
    const pStyle = {
      fontFamily: 'Lato',
      fontSize: '1.5em',
      letterSpacing: '.1em',
      color: 'rgb(200,200,200)',
      // textShadow: '2px 2px rgb(155,155,155)',
    };
    return (
        <Grid
            container
            stackable
            textAlign='center'
            verticalAlign='middle'
            style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Grid.Row>
          <Header style={headerStyle}>Dorm Room Cooks</Header>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src='/images/uh-student-fat.png' size='small' centered/>
            </Grid.Column>
            <Grid.Column width={8}>
              <p style={pStyle}>Get your &#8216;ono grindz right here!
                Find/Create incredible tasty treats designed to
                be made from the comfort of your dorm room or apartment.</p>
              <p style={pStyle}>Recipes are crafted with nutrition, budget,
                and local Hawaiian vendors
                in mind.</p>
            </Grid.Column>
            <Grid.Column width={4}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default IntroBlock;
