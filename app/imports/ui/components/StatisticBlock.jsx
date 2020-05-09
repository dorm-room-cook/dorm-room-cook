import React, { Component } from 'react';
import { Grid, Segment, Statistic } from 'semantic-ui-react';

const backgroundStyle = {
  padding: '5em 0em',
  border: '5px',
  borderStyle: 'solid none solid none',
  borderColor: 'rgb(200,200,200)',
};

class StatisticBlock extends Component {
  render() {
    const labelSytle = { color: 'orange' };
    return (
        <Segment inverted vertical
                 style={backgroundStyle}>
          <Grid container stackable textAlign='center'>
            <Grid.Row>
              <Grid.Column width={4}>
                <Statistic color='grey' inverted size='huge'>
                  <Statistic.Value>500</Statistic.Value>
                  <Statistic.Label style={labelSytle}>satisfied</Statistic.Label>
                  <Statistic.Label>customers*</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column width={4}>
                <Statistic color='grey' inverted size='huge'>
                  <Statistic.Value>50+</Statistic.Value>
                  <Statistic.Label style={labelSytle}>amazing</Statistic.Label>
                  <Statistic.Label>recipes</Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Statistic color='grey' inverted size='huge'>
                  <Statistic.Value>20</Statistic.Value>
                  <Statistic.Label style={labelSytle}>wonderful</Statistic.Label>
                  <Statistic.Label>sponsors*</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column width={4}>
                <Statistic color='grey' inverted size='huge'>
                  <Statistic.Value>200</Statistic.Value>
                  <Statistic.Label style={labelSytle}>million</Statistic.Label>
                  <Statistic.Label>smiles somewhere</Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
    );
  }
}

export default StatisticBlock;
//
//     style={{
//       height: "200px",
//       backgroundImage: `url(https://cdn.pixabay.com/photo/2017/05/13/15/18/dear-2309801_1280.jpg)`,
//       backgroundSize: "cover",
//     }}
