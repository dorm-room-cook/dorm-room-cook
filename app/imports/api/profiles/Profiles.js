import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Profiles = new Mongo.Collection('Profiles');

/** Define a schema to specify the structure of each document in the collection. */
const ProfileSchema = new SimpleSchema({
  email: { type: String, index: true, unique: true },
  firstName: { type: String, optional: true },
  lastName: { type: String, optional: true },
  bio: { type: String, optional: true },
  title: { type: String, optional: true },
  picture: { type: String, optional: true },
  major: { type: String, optional: true },
  interests: { type: Array, optional: true },
  'interests.$': String,
  recipes: { type: Array, optional: true },
  'recipes.$': String,
  linkedIn: { type: String, optional: true },
  github: { type: String, optional: true },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Profiles.attachSchema(ProfileSchema);

/** Make the collection and schema available to other code. */
export { Profiles, ProfileSchema };
