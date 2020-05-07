import React from 'react';
import { Grid, Segment, Statistic } from 'semantic-ui-react';

class StatisticBlock extends React.Component {
  render() {
    const labelSytle = { color: 'orange' };
    return (
        <Segment inverted style={{ padding: '5em 0em' }}>
          <Grid textAlign='center' centered stackable>
              <Grid.Column width={14}>
                <Statistic color='grey' inverted>
                  <Statistic.Value>50</Statistic.Value>
                  <Statistic.Label style={labelSytle}>thousand</Statistic.Label>
                  <Statistic.Label>active users</Statistic.Label>
                </Statistic>
                <Statistic color='grey' inverted>
                  <Statistic.Value>10</Statistic.Value>
                  <Statistic.Label style={labelSytle}>million</Statistic.Label>
                  <Statistic.Label>active users</Statistic.Label>
                </Statistic>
                <Statistic color='grey' inverted>
                  <Statistic.Value>100</Statistic.Value>
                  <Statistic.Label style={labelSytle}>wonderful</Statistic.Label>
                  <Statistic.Label>sponsors</Statistic.Label>
                </Statistic>
                <Statistic color='grey' inverted>
                  <Statistic.Value>500</Statistic.Value>
                  <Statistic.Label style={labelSytle}>million</Statistic.Label>
                  <Statistic.Label>smiles</Statistic.Label>
                </Statistic>
            </Grid.Column>
          </Grid>
        </Segment>
    );
  }
} export default StatisticBlock;
// <Card.Content
//     style={{
//       height: "200px",
//       backgroundImage: `url(https://cdn.pixabay.com/photo/2017/05/13/15/18/dear-2309801_1280.jpg)`,
//       backgroundSize: "cover",
//     }}
// >
