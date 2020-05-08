import React from 'react';
import { Grid, Segment, Statistic } from 'semantic-ui-react';

class StatisticBlock extends React.Component {
  render() {
    const labelSytle = { color: 'orange' };
    return (
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Grid container stackable textAlign='center'>
            <Grid.Row>
              <Grid.Column width={4}>
                <Statistic color='grey' inverted size='huge'>
                  <Statistic.Value>5</Statistic.Value>
                  <Statistic.Label style={labelSytle}>active</Statistic.Label>
                  <Statistic.Label>users</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column width={4}>
                <Statistic color='grey' inverted size='huge'>
                  <Statistic.Value>50</Statistic.Value>
                  <Statistic.Label style={labelSytle}>plus</Statistic.Label>
                  <Statistic.Label>recipes</Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Statistic color='grey' inverted size='huge'>
                  <Statistic.Value>15</Statistic.Value>
                  <Statistic.Label style={labelSytle}>wonderful</Statistic.Label>
                  <Statistic.Label>sponsors</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column width={4}>
                <Statistic color='grey' inverted size='huge'>
                  <Statistic.Value>2</Statistic.Value>
                  <Statistic.Label style={labelSytle}>dozen</Statistic.Label>
                  <Statistic.Label>smiles</Statistic.Label>
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
