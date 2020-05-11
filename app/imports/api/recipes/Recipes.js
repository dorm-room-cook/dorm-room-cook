import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Recipes = new Mongo.Collection('Recipes');

/** Define a schema to specify the structure of each document in the collection. */
const RecipeSchema = new SimpleSchema({
  name: String,
  image: String,
  description: String,
  owner: { type: String, optional: true },
  time: String,
  items: { type: Number, optional: true },
  ingredients: { type: Array, minCount: 1 },
    'ingredients.$': { type: String, min: 1 },
  type: { type: Array, minCount: 1 },
    'type.$': { type: String, min: 1 },
  tools: { type: Array, minCount: 1 },
    'tools.$': { type: String, min: 0 },
  servings: { type: Number, min: 0 },
  instructions: { type: Array, minCount: 1 },
    'instructions.$': { type: String, min: 1 },
  source: { type: String, optional: true },
  views: { type: Number, optional: true },
  rating: { type: Number, min: 0, max: 5, optional: true },
  notes: { type: Array, optional: true },
    'notes.$': { type: String },
  created: { type: String, optional: true },
  updated: { type: String, optional: true },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Recipes.attachSchema(RecipeSchema);

/** Make the collection and schema available to other code. */
export { Recipes, RecipeSchema };
