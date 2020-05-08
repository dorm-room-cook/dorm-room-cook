import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

class SponsorsBlock extends Component {

  render() {
    const backgroundStyle = {
      border: '5px',
      borderStyle: 'solid none solid none',
      borderColor: 'orange',
      background: 'url("/images/bg/recipes-header.jpg")',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: '45%',
      height: '500px',
    };

    return (

        <div style={backgroundStyle}>
          <Grid padded columns={2}>
            <Grid.Column style={{ background: 'rgba(0,171,79,.87)' }}>
                  <Header inverted as={'h1'} content={'Ingredients from local suppliers'}/>
                  <Header inverted as={'h3'}>
                    <p>Get whatever you need at the store...and they can even deliver it to your dorm room!</p>
                    <p>...</p>
                    <p>..</p>
                    <p>.</p>
                    <p>How cool is that?!</p>
                  </Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default SponsorsBlock;
