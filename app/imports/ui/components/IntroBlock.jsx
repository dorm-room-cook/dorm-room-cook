import React from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';

export default class MissionBlock extends React.Component {

  render() {
    const headerStyle = {
      fontFamily: 'Montserrat Alternates',
      fontStyle: 'sans-serif',
      fontSize: '64px',
      letterSpacing: '.1em',
      color: 'rgb(255,255,255)',
      // textShadow: '2px 2px rgb(123,123,123)',
    };
    const pStyle = {
      // fontFamily: 'Pattaya',
      // fontStyle: 'cursive',
      fontFamily: 'Lato',
      fontSize: '1.5em',
      letterSpacing: '.1em',
      color: 'rgb(200,200,200)',
      // textShadow: '2px 2px rgb(155,155,155)',
    };
    return (
        <Grid verticalAlign='middle' textAlign='center' stackable style={{ padding: '5em 0em' }}>
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
              {/*<Image src='https://www.staradvertiser.com/wp-content/uploads/2019/02/web1_WDA-Makuu-market-1.jpg'*/}
              {/*      size='small'*/}
              {/*      rounded*/}
              {/*      centered/>*/}
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
// Pacifico|Pattaya|Shrikhand|Srisakdi
