import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Profiles = new Mongo.Collection('Profiles');

/** Define a schema to specify the structure of each document in the collection. */
const ProfileSchema = new SimpleSchema({
  email: { label: 'Email', type: String, index: true, unique: true },
  firstName: { label: 'First Name', type: String, optional: true },
  lastName: { label: 'Last Name', type: String, optional: true },
  bio: { label: 'Bio', type: String, optional: true },
  picture: { type: String, optional: true },
  major: { label: 'Major', type: String, optional: true },
  interests: { label: 'Interests', type: Array, optional: true },
  'interests.$': String,
  recipes: { label: 'Recipes', type: Array, optional: true },
  'recipes.$': String,
  linkedIn: { label: 'LinkedIn', type: String, optional: true },
  github: { label: 'Github', type: String, optional: true },
}, { tracker: Tracker });
/** Attach this schema to the collection. */
Profiles.attachSchema(ProfileSchema);

/** Make the collection and schema available to other code. */
export { Profiles, ProfileSchema };
