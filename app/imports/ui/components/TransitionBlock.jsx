import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default class StatisticBlock extends React.Component {
  render() {
    return (
        <div style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Grid textAlign='center'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as={'h1'} content={'WHO ARE WE?'} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
