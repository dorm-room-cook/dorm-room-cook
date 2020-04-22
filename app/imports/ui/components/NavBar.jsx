import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (
        <Menu attached="top" borderless>
          <Menu.Item as={NavLink}
                     activeClassName=""
                     exact to="/">
            <Image className='uh-green'
                   src='/images/logo.png'
                   size='mini'
                   />
          </Menu.Item>
          <Menu.Item as={NavLink}
                     activeClassName=""
                     exact to='recipes'
                     key=''
                     content='Recipes'/>
          {this.props.currentUser ? (
              [<Menu.Item as={NavLink}
                          activeClassName="active"
                          exact to="/add"
                          key='add'
                          icon='plus mini'
                          content='Add Recipes'/>,
                <Menu.Item as={NavLink}
                           activeClassName="active"
                           exact to="/list"
                           key='list'
                           content='My Recipes'/>,
              ]
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'vendor') ? ([
              <Menu.Item as={NavLink}
                         activeClassName="active"
                         exact to="/vendors"
                         key='vendors'
                         content='Vendors'
              />,
              <Menu.Item as={NavLink}
                         activeClassName="active"
                         exact to="/listallitems"
                         key='listallitems'
                         content='My Ingredients'
              />]
          ) : ''}
          <Menu.Item position="right">
            {this.props.currentUser === '' ? (
                <Dropdown text="Login&nbsp;" pointing="top right" spaced>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right">
                  <Dropdown.Menu>
                    <Dropdown.Item icon="address card" text="Edit Profile" as={NavLink} exact to="/edituserprofile"/>
                    <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
          </Menu.Item>
        </Menu>
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
