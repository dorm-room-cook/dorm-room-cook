import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import CommentsBlock from './CommentsBlock';

class ActionBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { showComments: false, visible: true };
  }

  toggle = () => {
    this.setState({ showComments: !this.state.showComments });
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    const backgroundStyle = {
      padding: '5em 0em',
      border: '5px',
      borderStyle: 'solid none solid none',
      borderColor: 'orange',
      background: 'url("/images/bg/bg_dark.jpg")',
    };
    const subheader = {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.875',
      color: 'rgb(200,200,200)',
      letterSpacing: '.1em',
    };
    const commentsBlock = <CommentsBlock/>;

    return (
      <div>
        <div style={backgroundStyle}>
          <Grid container textAlign='center'>
            <Grid.Row textAlign='center'>
              <Grid.Column width={12}>
               <Header inverted as='h1'>FOOD is the Ingredient That Binds Us Together</Header>
                <p style={subheader}>Please leave a review</p>
                <Button
                    color='orange'
                    basic
                    toggle
                    content={visible ? 'Show Comments' : 'Hide Comments'}
                    onClick={this.toggle}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        {this.state.showComments && commentsBlock}
      </div>
    );
  }
} export default ActionBlock;
