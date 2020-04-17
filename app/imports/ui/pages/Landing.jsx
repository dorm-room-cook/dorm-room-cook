import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <Grid verticalAlign='middle' textAlign='center' container stackable>
            <Grid.Column width={4}>
              <Image className='' src='/images/uh-student-fat.png' size='small' centered/>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h1'>Dorm Room Cooks</Header>
              <p className='baloo'>Get your ono grindz right here! Find/Create incredible tasty treats designed to
                be made from the comfort of your dorm room or apartment.</p>
              <p className='baloo'>Recipes are crafted with nutrition, budget, and local Hawaiian vendors
                in mind.</p>
              <br />
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
export default Landing;
