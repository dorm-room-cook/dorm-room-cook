import React from 'react';
import { Container, Grid, Header, Button, Icon, Card, List, Segment, Modal, Image } from 'semantic-ui-react';
/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  state = { open: false }

  show = (size) => () => this.setState({ size, open: true })

  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state;

    return (
      <footer>
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
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
                <Header inverted as='h4' content='Recipes' />
                <List link inverted>
                  <List.Item as='a'>Herbivores</List.Item>
                  <List.Item as='a'>Carnivores</List.Item>
                  <List.Item as='a'>Omnivores</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header inverted as='h4' content='Make sure to check us out!' />
                <List horizontal>
                  <List.Item><Icon name='facebook f large'/></List.Item>
                  <List.Item><Icon name='twitter large'/></List.Item>
                  <List.Item><Icon name='linkedin large'/></List.Item>
                  <List.Item><Icon name='instagram large'/></List.Item>
                  <List.Item><Icon name='twitch large'/></List.Item>
                  <List.Item><Icon name='youtube large'/></List.Item>
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
            <Modal basic size={size} open={open} onClose={this.close}>
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
                        <a href="http://github.com/mlr77"><Icon name='big github'/></a>
                        <a href="https://www.linkedin.com/in/michael-rogers-a2a1152a/"><Icon name='big linkedin'/></a>
                        <a href="mailto:mlr2010@hawaii.edu"><Icon name='big mail square'/></a>
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
                        <a href="http://github.com/joshuahartmann"><Icon name='big github'/></a>
                        <a href="https://www.linkedin.com/in/joshua-hartmann/"><Icon name='big linkedin'/></a>
                        <a href="mailto:joshuabh@hawaii.edu"><Icon name='big mail square'/></a>
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
                        <a href="http://github.com/rberbano"><Icon name='big github'/></a>
                        <a href="https://www.linkedin.com/in/randallberbano/"><Icon name='big linkedin'/></a>
                        <a href="mailto:jrberbano@hawaii.edu"><Icon name='big mail square'/></a>
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
                        <a href="http://github.com/ryanm73"><Icon name='big github'/></a>
                        <a href="https://www.linkedin.com/in/ryan-mangubat/"><Icon name='big linkedin'/></a>
                        <a href="mailto:ryan73@hawaii.edu"><Icon name='big mail square'/></a>
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
                        <a href="http://github.com/jonathanoba"><Icon name='big github'/></a>
                        <a href="https://www.linkedin.com/in/jonathanoba/"><Icon name='big linkedin'/></a>
                        <a href="mailto:joba@hawaii.edu"><Icon name='big mail square'/></a>
                      </div>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Modal.Content>
             <Modal.Actions>
              <Button
                  basic negative
                  color='red'
                  onClick={this.close}
                  content='Close'
              />
             </Modal.Actions>
            </Modal>
          </Container>
        </Segment>
      </footer>
    );
  }
}
export default Footer;
