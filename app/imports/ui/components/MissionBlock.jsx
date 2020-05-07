import React from 'react';
import { Header, Button, Container, Image, Grid } from 'semantic-ui-react';

export default class MissionBlock extends React.Component {
  state = { showMessage: false, visible: true }

  toggle = () => {
    this.setState({ showMessage: !this.state.showMessage });
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    const missionTitle = {
      fontFamily: 'Montserrat Alternates',
      fontStyle: 'sans-serif',
    };
    const pMissionText = {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.875',
      color: 'rgb(200,200,200)',
      letterSpacing: '.1em',
    };
    return (
        <div style={{ margin: '5em 0em 0em 0em', padding: '5em 0em' }}>
          <Grid container textAlign='center'>
            <Grid.Row>
              <Grid.Column width={10}>
                <Header inverted as="h1" style={missionTitle} textAlign='center'>Who Are We?</Header>
                <p style={pMissionText}>Connecting UH Manoa students and stores together through
                  food since 1983 (give or take a few decades).</p>
                <Container textAlign='center'>
                  <Button
                      toggle
                      // basic
                      color='orange'
                      content={visible ? 'Read More' : 'Read Less'}
                      onClick={this.toggle}/>
                </Container>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={10}>
                {this.state.showMessage &&
                <div className="content">
                  <Header inverted as="h1" style={missionTitle} textAlign='center'>Powered by Superheros</Header>
                  <p style={pMissionText}>Dorm Room Cooks is powered by five superhero developers who
                    produce their own immersive, culinary experiences, using our intuitive menu creation. Any
                    experience imaginable can be created on Dorm Room Cooks.</p>
                  <Image src='/images/green-line.png' size='big' centered/>
                  <Header inverted as="h1" style={missionTitle} textAlign='center'>How Popular?</Header>
                  <p style={pMissionText}>Dorm Room Cooks is ranked as one of the top online recipe platforms for
                    foodies (within the UH Manoa System). Our popularity is driven purely by the community, with several
                    people signing up through word of mouth each year.</p>
                </div>}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
