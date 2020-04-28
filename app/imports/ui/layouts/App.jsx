import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import AddRecipe from '../pages/AddRecipe';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import ListRecipes from '../pages/ListRecipes';
import AddVendorItem from '../pages/AddVendorItem';
import ListVendorItems from '../pages/ListVendorItems';
import ListVendorItemsAdmin from '../pages/ListVendorItemsAdmin';
import MyRecipes from '../pages/MyRecipes';
import MyItems from '../pages/MyItems';
import EditItem from '../pages/EditItem';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              { /* The main landing page - everyone sees this */}
              <Route exact path="/" component={Landing}/>
              { /* The page that displays all recipe cards - everyone has access */}
              <Route path="/recipes" component={ListRecipes}/>
              { /* The page that displays all vendor cards - everyone sees this */}
              {/* <Route path="/vendors" component={ListVendors}/> -- not yet implemented */}
              { /* Sign-in/Sign-up - everyone can do this */}
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <ProtectedRoute path="/myrecipes" component={MyRecipes}/>
              <ProtectedRoute path="/myitems" component={MyItems}/>
              <ProtectedRoute path="/edititem/:_id" component={EditItem}/>
              {/*<ProtectedRoute path="/editprofile" component={EditProfile}/>*/}
              <ProtectedRoute path="/addrecipe" component={AddRecipe}/>
              {/*<ProtectedRoute path="/editrecipe" component={EditRecipe}/>*/}
              {/* <ProtectedRoute path="/add" component={AddRecipe}/> -- this should show up in my-recipes */}
              {/* <ProtectedRoute path="/additem" component={AddVendorItem}/> */}
              <ProtectedRoute path="/items" component={ListVendorItems}/>
              <AdminProtectedRoute path="/adminitems" component={ListVendorItemsAdmin}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              {/* <VendorProtectedRoute path="/signout" component={Signout}/> */}
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

const VendorProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isVendor = Roles.userIsInRole(Meteor.userId(), 'vendor');
          return (isLogged && isVendor) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

VendorProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
