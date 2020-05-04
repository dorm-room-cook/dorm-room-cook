import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Component for layout out a Recipe Card. */
class ProfileCard extends React.Component {

    render() {
      return (
      <Card centered>
        <Image size='big' rounded src={this.props.profile.image}/>
          <Card.Content>
            <Card.Header>{this.props.profile.firstName} {this.props.profile.lastName}</Card.Header>
            <Card.Meta>Major: {this.props.profile.major}</Card.Meta>
            <Card.Description>
              {this.props.profile.bio}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="center aligned extra content">
              <a href={this.props.profile.github}><Icon name='github' size='big'/></a>
              <a href={this.props.profile.linkedIn}><Icon name='linkedin' size='big'/></a>
              <a href={`mailto:${this.props.profile.email}`}><Icon name='mail square' size='big'/></a>
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
