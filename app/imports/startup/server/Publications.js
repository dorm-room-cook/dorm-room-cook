import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Items } from '../../api/items/Items';
import { Recipes } from '../../api/recipes/Recipes';
import { Vendors } from '../../api/vendors/Vendors';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Items', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Items.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the ListRecipes. */
Meteor.publish('ItemAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Items.find();
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
