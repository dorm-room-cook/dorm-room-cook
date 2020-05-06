import React from 'react';
import { Segment, Header, Button, Container, Image, Grid } from 'semantic-ui-react';

export default class MissionBlock extends React.Component {
  state = { showMessage: false, visible: true }

  toggle = () => {
    this.setState({ showMessage: !this.state.showMessage });
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Grid container textAlign='center'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header inverted as="h1" textAlign='center'>What is Dorm Room Cooks?</Header>
              <p className='mission-text'>Our mission is to connect UH Manoa students together through
                food.</p>
              {this.state.showMessage &&
              <div className="content">
                <Header inverted as="h1" textAlign='center'>Powered by Superheros</Header>
                <p className='mission-text'>Dorm Room Cooks is powered by five superhero developers who
                  produce their own immersive, culinary experiences, using our intuitive menu creation. Any
                  experience imaginable can be created on Dorm Room Cooks.</p>
                <Image className='' src='/images/green-line.png' size='big' centered/>
                <Header inverted as="h1" textAlign='center'>How Popular?</Header>
                <p className='mission-text'>Dorm Room Cooks is ranked as one of the top online recipe platforms for
                  foodies (within the UH Manoa System). Our popularity is driven purely by the community, with several
                  people signing up through word of mouth each year.</p>< br/>
              </div>}
            </Grid.Column>
          </Grid.Row>
          </Grid>
          <Container textAlign='center'>
            <Button
                toggle
                content={ visible ? 'Read More' : 'Read Less' }
                onClick={this.toggle}>
            </Button>
          </Container>
        </Segment>
    );
  }
}