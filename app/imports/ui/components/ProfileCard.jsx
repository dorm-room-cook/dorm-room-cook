import React from 'react';
import { Card, Header, Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Component for layout out a Recipe Card. */
class ProfileCard extends React.Component {

    render() {

      const cardContentStyle1 = { backgroundColor: 'rgba(0,0,0,0.8)', width: '100%', height: '40px' };
      const cardContentStyle2 = { backgroundColor: 'rgba(0,0,0,0.2', width: '100%' };
      const cardContentStyle3 = { backgroundColor: 'rgba(0,0,0,0.1', width: '100%' };
      const iconStyle = { color: 'darkGreen' };

      return (
        <Card basic centered size='tiny' raised='true'>
          <Card.Content style={ cardContentStyle1 }>
          <Header as="h4" style={{ color: 'white' }} textAlign="center">Profile View</Header>
          </Card.Content>
          <Image src={this.props.profile.picture}/>
          <Card.Content extra style={ cardContentStyle2 }>
            <Card.Header>{this.props.profile.firstName} {this.props.profile.lastName}</Card.Header>
            <Card.Meta>Student, {this.props.profile.major}</Card.Meta>
            <Card.Description>
              {this.props.profile.bio}
            </Card.Description>
          </Card.Content>
          <Card.Content extra style={ cardContentStyle3 }>
            <div className="center aligned extra content">
              {(this.props.profile.github !== '') ?
                  <a href={this.props.profile.github}>
                    <Icon style={ iconStyle } name='github' size='big'/>
                  </a> : ''}
              <a href={this.props.profile.linkedIn}>
                <Icon style={ iconStyle } name='linkedin' size='big'/>
              </a>
              <a href={`mailto:${this.props.profile.email}`}>
                <Icon style={ iconStyle } name='mail square' size='big'/>
              </a>
            </div>
          </Card.Content>
        </Card>
    );
  }
}

ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired,
  Profiles: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ProfileCard);
