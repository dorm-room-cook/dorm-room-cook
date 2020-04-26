import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Recipes } from '../../api/recipe/Recipe.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
/** Initialize the database with a default recipe data document. */
function addRecipe(data) {
  console.log(`  Adding: ${data.title} (${data.owner})`);
  Recipes.insert(data);
}

/** Initialize the collection if empty. */
if (Recipes.find().count() === 0) {
  if (Meteor.settings.defaultRecipes) {
    console.log('Creating default recipe data.');
    Meteor.settings.defaultRecipes.map(data => addRecipe(data));
  }
}

/**
 * If the loadAssetsFile field in settings.development.json is true, then load the data in private/recipe.json.
 * This approach allows you to initialize your system with large amounts of data.
 * Note that settings.development.json is limited to 64,000 characters.
 * We use the "Assets" capability in Meteor.
 * For more info on assets, see https://docs.meteor.com/api/assets.html
 * Recipe count check is to make sure we don't load the file twice, which would generate errors due to duplicate info.
 */
if ((Meteor.settings.loadAssetsFile) && (Recipes.find().count() === 2)) {
  const assetsFileName = 'recipes.json';
  console.log(`Loading data from private/${assetsFileName}`);
  const jsonData = JSON.parse(Assets.getText(assetsFileName));
  jsonData.recipes.map(recipe => addRecipe(recipe));
}
