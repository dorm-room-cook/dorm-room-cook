import React from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';

export default class MissionBlock extends React.Component {

  render() {
    return (
        // <Segment vertical style={{ padding: '5em 0em' }}>
          <Grid verticalAlign='middle' textAlign='center' stackable style={{ padding: '5em 0em' }}>
            <Grid.Column width={4}>
              <Image className='' src='/images/uh-student-fat.png' size='small' centered/>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h1'>Dorm Room Cooks</Header>
              <p className='baloo'>Get your &#8216;ono grindz right here!
                Find/Create incredible tasty treats designed to
                be made from the comfort of your dorm room or apartment.</p>
              <p className='baloo'>Recipes are crafted with nutrition, budget,
                and local Hawaiian vendors
                in mind.</p>
            </Grid.Column>
            <Grid.Column width={2}/>
          </Grid>
        // </Segment>
    );
  }
}
