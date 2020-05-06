import React from 'react';
import { Grid, Segment, Statistic } from 'semantic-ui-react';

export default class StatisticBlock extends React.Component {
  render() {
    return (
        <Segment inverted vertical style={{ margin: '15em 0em 0em', padding: '5em 0em' }}>
          <Grid textAlign='center'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Statistic color='orange' inverted>
                  <Statistic.Value>Five</Statistic.Value>
                  <Statistic.Label>Active Users</Statistic.Label>
                </Statistic>
                <Statistic color='violet' inverted>
                  <Statistic.Value>+</Statistic.Value>
                </Statistic>
                <Statistic color='yellow' inverted>
                  <Statistic.Value>59</Statistic.Value>
                  <Statistic.Label>Recipes</Statistic.Label>
                </Statistic>
                <Statistic color='teal' inverted>
                  <Statistic.Value>+</Statistic.Value>
                </Statistic>
                <Statistic color='green' inverted>
                  <Statistic.Value>Some</Statistic.Value>
                  <Statistic.Label>Vendors</Statistic.Label>
                </Statistic>
                <Statistic color='pink' inverted>
                  <Statistic.Value>=</Statistic.Value>
                </Statistic>
                <Statistic color='blue' inverted>
                  <Statistic.Value>loads</Statistic.Value>
                </Statistic>
                <Statistic color='purple' inverted>
                  <Statistic.Value>of</Statistic.Value>
                </Statistic>
                <Statistic color='red' inverted>
                  <Statistic.Value>happiness</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
    );
  }
}
