import React, { Component } from 'react';
import { Grid, Comment, Header, Form, Button, Container } from 'semantic-ui-react';

class CommentsBlock extends Component {
  render() {

    return (
        <div style={{ padding: '5em 0em', background: 'white' }}>
          <Grid textAlign={'center'}>
            <Grid.Column width={8}>
            <Container textAlign='left'>
              <Comment.Group threaded>
                <Header as='h3' dividing>
                  Comments
                </Header>

                <Comment>
                  <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
                  <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                      <span>Today at 5:42PM</span>
                    </Comment.Metadata>
                    <Comment.Text>OMG! The Quesadilla recipe is so easy and I can get all the ingredients
                    delivered right to my dorm room from local suppliers!
                    </Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Comment>
                  <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
                  <Comment.Content>
                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                    <Comment.Metadata>
                      <span>Yesterday at 12:30AM</span>
                    </Comment.Metadata>
                    <Comment.Text>
                      <p>Yum yum nom nom!</p>
                    </Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Comment>
                  <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'/>
                  <Comment.Content>
                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                    <Comment.Metadata>
                      <span>5 days ago</span>
                    </Comment.Metadata>
                    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Form reply>
                  <Form.TextArea/>
                  <Button content='Add Reply' labelPosition='left' icon='edit' primary/>
                </Form>
              </Comment.Group>
            </Container>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default CommentsBlock;
