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
  owner: String,
  time: String,
  items: Number,
  ingredients: [String],
  type: [String],
  tools: { type: Array, optional: true },
    'tools.$': String,
  servings: { type: Number, min: 0 },
  instructions: [String],
  source: { type: String, optional: true },
  views: Number,
  rating: { type: Number, min: 0, max: 5, optional: true },
  notes: [String],
  created: String,
  updated: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Recipes.attachSchema(RecipeSchema);

/** Make the collection and schema available to other code. */
export { Recipes, RecipeSchema };
