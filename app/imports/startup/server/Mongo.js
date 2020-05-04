import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Items } from '../../api/items/Items.js';
import { Recipes } from '../../api/recipes/Recipes.js';
import { Profiles } from '../../api/profiles/Profiles.js';
import { Vendors } from '../../api/vendors/Vendors.js';

/* eslint-disable no-console */

/** Define an interest.  Has no effect if interest already exists. */
// function addRecipes(recipe) {
//   Recipes.update({ name: recipe }, { $set: { name: recipe } }, { upsert: true });
// }

function createUser(email, password, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
  });

  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }

  if (role === 'vendor') {
    Roles.addUsersToRoles(userID, 'vendor');
  }
}


/** Initialize the database with a default recipe data document. */
function addRecipes(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Recipes.insert(data);
}

/** Initialize the database with a default recipe data document. */
function addProfiles(data) {
  console.log(`  Adding: ${data.firstName} (${data.email})`);
  createUser(data.email, 'changeme', '');
  // Create the profile.
  Profiles.insert(data);
}

/** Initialize the database with a default recipe data document. */
function addItems(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Items.insert(data);
}

/** Initialize the database with a default recipe data document. */
function addVendors(data) {
  console.log(`  Adding: ${data.name} (${data.email})`);
  createUser(data.email, 'changeme', 'vendor');
  Vendors.insert(data);
}

/**
 * If the loadAssetsFile field in settings.development.json is true, then load the data in private/recipe.json.
 * This approach allows you to initialize your system with large amounts of data.
 * Note that settings.development.json is limited to 64,000 characters.
 * We use the "Assets" capability in Meteor.
 * For more info on assets, see https://docs.meteor.com/api/assets.html
 * Recipe count check is to make sure we don't load the file twice, which would generate errors due to duplicate info.
 */
if ((Meteor.settings.loadAssetsFile) && (Recipes.find().count() < 3)) {
  /* Add items data */
  const itemsFileName = 'items.json';
  console.log(`Loading data from private/${itemsFileName}`);
  const itemsData = JSON.parse(Assets.getText(itemsFileName));
  itemsData.items.map(item => addItems(item));
  /* Add profiles data */
  const profilesFileName = 'profiles.json';
  console.log(`Loading data from private/${profilesFileName}`);
  const profilesData = JSON.parse(Assets.getText(profilesFileName));
  profilesData.profiles.map(profile => addProfiles(profile));
  /* Add recipes data */
  const recipesFileName = 'recipes.json';
  console.log(`Loading data from private/${recipesFileName}`);
  const recipesData = JSON.parse(Assets.getText(recipesFileName));
  recipesData.recipes.map(recipe => addRecipes(recipe));
  /* Add vendors data */
  const vendorsFileName = 'vendors.json';
  console.log(`Loading data from private/${vendorsFileName}`);
  const vendorsData = JSON.parse(Assets.getText(vendorsFileName));
  vendorsData.vendors.map(vendor => addVendors(vendor));
}
// if ((Meteor.settings.loadAssetsFile) && (Recipes.find().count() < 2)) {
//   const assetsFileName = 'recipes.json';
//   console.log(`Loading data from private/${assetsFileName}`);
//   const jsonData = JSON.parse(Assets.getText(assetsFileName));
//   jsonData.recipes.map(recipe => addRecipes(recipe));
// }
