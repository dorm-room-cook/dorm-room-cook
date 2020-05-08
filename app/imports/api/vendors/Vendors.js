import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Vendors = new Mongo.Collection('Vendors');

/** Define a schema to specify the structure of each document in the collection. */
const VendorSchema = new SimpleSchema({
  name: String,
  image: { type: String, optional: true },
  email: { type: String, index: true, unique: true },
  address: [String],
  hours: { type: String, optional: true },
  phone: { type: String, optional: true },
  priceindex: { type: String, optional: true },
  website: { type: String, optional: true },
  coupons: { type: String, optional: true },
  logo: { type: String, optional: true },
  likes: Number,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Vendors.attachSchema(VendorSchema);

/** Make the collection and schema available to other code. */
export { Vendors, VendorSchema };
