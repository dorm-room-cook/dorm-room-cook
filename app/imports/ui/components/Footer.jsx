import React, { Component } from 'react';
import { Container, Grid, Header, Icon, Card, List, Segment, Modal, Image } from 'semantic-ui-react';
/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends Component {
  state = { open: false }

  show = (size) => () => this.setState({ size, open: true })

  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state;

    return (
      <footer>
        <Segment inverted vertical style={{ margin: '0em 0em 0em', padding: '5em 0em' }}>
          <Container textAlign='center'>
             <Grid divided inverted stackable>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='Shop Ingredients' />
                <List link inverted>
                  <List.Item as='a'>Local Markets</List.Item>
                  <List.Item as='a'>Supermarkets</List.Item>
                  <List.Item as='a'>Other</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='ListRecipes' />
                <List link inverted>
                  <List.Item as='a'>Herbivores</List.Item>
                  <List.Item as='a'>Carnivores</List.Item>
                  <List.Item as='a'>Omnivores</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header inverted as='h4' content='Make sure to check us out!' />
                <List horizontal>
                  <List.Item><Icon name='facebook f' size='large'/></List.Item>
                  <List.Item><Icon name='twitter' size='large'/></List.Item>
                  <List.Item><Icon name='linkedin' size='large'/></List.Item>
                  <List.Item><Icon name='instagram' size='large'/></List.Item>
                  <List.Item><Icon name='twitch' size='large'/></List.Item>
                  <List.Item><Icon name='youtube' size='large'/></List.Item>
                </List>
              </Grid.Column>
             </Grid>
            <br />
            <Image className='linediv' src='/images/green-line-2.png' />
            <Image centered size='tiny' className='uh-green' src='/images/logo.png' />
            <List inverted horizontal divided link size='small'>
              <List.Item as='a' href='https://dorm-room-cook.github.io/'>
                Learn More
              </List.Item>
              <List.Item as='a' onClick={this.show('small')} href='#'>
                Meet the Developers
              </List.Item>
              <List.Item as='a' href='https://manoa.hawaii.edu/privacy/'>
                Privacy Policy
              </List.Item>
            </List>
            <Modal basic size={size} open={open} onClose={this.close} closeIcon>
              <Modal.Header textAlign={'centered'}>Meet the Team</Modal.Header>
              <Modal.Content>
                <Card.Group centered itemsPerRow={2}>
                  <Card>
                    <Card.Content>
                      <Image rounded
                          floated='right'
                          size='mini'
                          src='https://ca.slack-edge.com/TS7NRJMB7-US9698SUR-7eab80555b70-512'
                      />
                      <Card.Header>Michael Rogers</Card.Header>
                      <Card.Meta>Student, Computer Science</Card.Meta>
                      <Card.Description>
                        Project Management and Website Design.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="center aligned extra content">
                        <a href="http://github.com/mlr77"><Icon name='github' size='big'/></a>
                        <a href="https://www.linkedin.com/in/michael-rogers-a2a1152a/">
                          <Icon name='linkedin' size='big'/></a>
                        <a href="mailto:mlr2010@hawaii.edu"><Icon name='mail square' size='big'/></a>
                      </div>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Image rounded
                             floated='right'
                             size='mini'
                             src='https://ca.slack-edge.com/TS7NRJMB7-USAD0EUAE-60de112b7d73-512'
                      />
                      <Card.Header>Joshua Hartmann</Card.Header>
                      <Card.Meta>Student, Computer Science</Card.Meta>
                      <Card.Description>
                        React Framework Guru.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="center aligned extra content">
                        <a href="http://github.com/joshuahartmann"><Icon name='github' size='big'/></a>
                        <a href="https://www.linkedin.com/in/joshua-hartmann/"><Icon name='linkedin' size='big'/></a>
                        <a href="mailto:joshuabh@hawaii.edu"><Icon name='mail square' size='big'/></a>
                      </div>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Image rounded
                             floated='right'
                             size='mini'
                             src='https://ca.slack-edge.com/TS7NRJMB7-USEBKFVSM-21eaa8d50430-512'
                      />
                      <Card.Header>Randall Berbano</Card.Header>
                      <Card.Meta>Student, Engineering</Card.Meta>
                      <Card.Description>
                        Meteor and JavaScript Aficionado.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="center aligned extra content">
                        <a href="http://github.com/rberbano"><Icon name='github' size='big'/></a>
                        <a href="https://www.linkedin.com/in/randallberbano/"><Icon name='linkedin' size='big'/></a>
                        <a href="mailto:jrberbano@hawaii.edu"><Icon name='mail square' size='big'/></a>
                      </div>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Image rounded
                             floated='right'
                             size='mini'
                             src='https://ca.slack-edge.com/TS7NRJMB7-USMBWH3KJ-6b53892ebced-512'
                      />
                      <Card.Header>Ryan Mangubat</Card.Header>
                      <Card.Meta>Student, Engineering</Card.Meta>
                      <Card.Description>
                        Front End Development/Documentation.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="center aligned extra content">
                        <a href="http://github.com/ryanm73"><Icon name='github' size='big'/></a>
                        <a href="https://www.linkedin.com/in/ryan-mangubat/"><Icon name='linkedin' size='big'/></a>
                        <a href="mailto:ryan73@hawaii.edu"><Icon name='mail square' size='big'/></a>
                      </div>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Image rounded
                             floated='right'
                             size='mini'
                             src='https://ca.slack-edge.com/TS7NRJMB7-USLHUCQ95-14f2f6636888-512'
                      />
                      <Card.Header>Jonathan Oba</Card.Header>
                      <Card.Meta>Student, Computer Science</Card.Meta>
                      <Card.Description>
                        Jack of all trades, master of none.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="center aligned extra content">
                        <a href="http://github.com/jonathanoba"><Icon name='github' size='big'/></a>
                        <a href="https://www.linkedin.com/in/jonathanoba/"><Icon name='linkedin' size='big'/></a>
                        <a href="mailto:joba@hawaii.edu"><Icon name='mail square' size='big'/></a>
                      </div>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Modal.Content>
            </Modal>
          </Container>
        </Segment>
      </footer>
    );
  }
}
export default Footer;
