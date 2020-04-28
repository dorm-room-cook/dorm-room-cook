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
      <Menu inverted attached="top" borderless>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Image className='uh-green' src='/images/logo.png' size='mini' />
        </Menu.Item>
        { /* This is the page accessible by all to view all recipes */ }
        <Menu.Item as={NavLink} activeClassName="active" exact to='/recipes' key='recipes' content='Recipes'/>
        { /* This is the page accessible by all to view all vendors - not implemented */ }
        <Menu.Item as={NavLink} activeClassName="active" exact to='/vendors' key='vendors' content='Vendors'/>
        { /* If logged in, users have access to my-recipes, my-items, and my-profile */ }
        {this.props.currentUser ? ([
          // <Menu.Item
          //     as={NavLink} activeClassName="active" exact to="/myprofile" key='myprofile' content='My Profile'/>,
          <Menu.Item
              as={NavLink} activeClassName="active" exact to="/myrecipes" key='myrecipes' content='My Recipes'/>,
          <Menu.Item
              as={NavLink} activeClassName="active" exact to="/myitems" key='myitems' content='My Ingredients'/>]
        ) : ''} { /* Else do not display */ }
        { /* Admin has access to set profile roles (student/vendor/admin) */ }
        {(Roles.userIsInRole(Meteor.userId(), 'admin')) ? ([
          <Menu.Item as={NavLink} activeClassName="active" exact to="/users" key='users' content='Permissions' />]
        ) : ''} { /* Else do not display */ }
        { /* Right side of the NavBar */ }
        <Menu.Item position="right">
          { /* If the user is not logged in, show login info */ }
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
                  <Dropdown.Item icon="address card" text="Edit Profile" as={NavLink} exact to="/profile"/>
                  <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                </Dropdown.Menu>
              </Dropdown>
          )} { /* Otherwise show Edit Profile Page and Sign Out option */ }
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
