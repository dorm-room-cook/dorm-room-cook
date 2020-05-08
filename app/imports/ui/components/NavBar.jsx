import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image, Responsive, Sticky } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends Component {
  render() {
    return (
<Sticky pushing>
     <Menu inverted pointing secondary fixed={'top'}>
          <Image className='white' src='/images/logo.png' spaced style={{ width: '50px', height: '50px' }} />
            <Responsive as={Menu.Item} maxWidth={767}>
              <Dropdown icon='bars'>
                <Dropdown.Menu style={{ background: 'rgba(0,0,0,0.9)' }}>
                  <Dropdown.Item as={NavLink} exact to='/recipes'>Recipes</Dropdown.Item>
                  <Dropdown.Item as={NavLink} exact to='/vendors'>Vendors</Dropdown.Item>
                  {this.props.currentUser ? ([
                    <Dropdown.Divider key=''/>,
                    <Dropdown.Item as={NavLink}
                                   activeClassName='active'
                                   exact to='/myrecipes'
                                   key='myrecipes'
                                   icon={'plus'}
                                   content={'Recipe'}
                    />,
                    <Dropdown.Item as={NavLink}
                                   activeClassName='active'
                                   exact to='/myitems'
                                   key='myitems'
                                   content='My Ingredients'
                    />,
                  ]) : ''}
                </Dropdown.Menu>
              </Dropdown>
            </Responsive>
            <Responsive as={Menu.Menu} minWidth={767}>
              <Menu.Item
                  as={NavLink}
                  activeClassName='active'
                  exact to='/'
                  key='/'
                  content='Home'/>
              <Menu.Item
                  as={NavLink}
                  activeClassName='active'
                  exact to='/recipes'
                  key='recipes'
                  content='Recipes'/>
              <Menu.Item
                  as={NavLink}
                  activeClassName='active'
                  exact to='/vendors'
                  key='vendors'
                  content='Vendors'/>
              {this.props.currentUser ? ([
                <Menu.Item
                    as={NavLink}
                    activeClassName="active"
                    exact to="/myrecipes"
                    key='myrecipes'
                    icon={'plus'}
                    content={'Recipe'}
                />,
                <Menu.Item
                    as={NavLink}
                    activeClassName="active"
                    exact to="/myitems"
                    key='myitems'
                    content='My Ingredients'/>]) : ''}
            </Responsive>
            {/* Right Side */}
            {(Roles.userIsInRole(Meteor.userId(), 'admin')) ? ([
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/users" key='users'
                             content='Permissions'/>]
            ) : ''}
            <Menu.Item position="right">
              {this.props.currentUser === '' ? (
                  <Dropdown text="Login&nbsp;" pointing="top right" spaced='true'>
                    <Dropdown.Menu style={{ background: 'rgba(0,0,0,0.8)' }}>
                      <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                      <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                    </Dropdown.Menu>
                  </Dropdown>
              ) : (
                  <Dropdown text={this.props.currentUser} pointing="top right">
                    <Dropdown.Menu>
                      <Dropdown.Item icon="address card"
                                     text="Edit Profile"
                                     as={NavLink}
                                     exact to={`/profile/${this.props.currentUser}`}/>
                      <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                    </Dropdown.Menu>
                  </Dropdown>
              )} { /* Otherwise show Edit Profile Page and Sign Out option */}
            </Menu.Item>
        </Menu>
</Sticky>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
