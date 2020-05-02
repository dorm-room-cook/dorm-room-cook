import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Items } from '../../api/items/Items';
import { Recipes } from '../../api/recipes/Recipes';
import { Vendors } from '../../api/vendors/Vendors';
import { Profiles } from '../../api/profiles/Profiles';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Items', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Items.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all items documents for admin only. */
Meteor.publish('ItemAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Items.find();
  }
  return this.ready();
});

/** This subscription publishes all profile documents for admin only. */
Meteor.publish('ProfileAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Profiles.find();
  }
  return this.ready();
});

/** This subscription publishes the recipes for all to see */
Meteor.publish('Recipes', function publish() {
  return Recipes.find();
});

/** This subscription publishes the recipes for all to see */
Meteor.publish('Vendors', function publish() {
  return Vendors.find();
});

Meteor.publish('MyRecipes', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Recipes.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish('MyItems', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Items.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish('MyProfile', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Profiles.find({ email: username });
  }
  return this.ready();
});
