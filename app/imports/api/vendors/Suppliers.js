import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Suppliers = new Mongo.Collection('Suppliers');

/** Define a schema to specify the structure of each document in the collection. */
const SupplierSchema = new SimpleSchema({
  image: String,
  supplier: String,
  location: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Suppliers.attachSchema(SupplierSchema);

/** Make the collection and schema available to other code. */
export { Suppliers, SupplierSchema };
