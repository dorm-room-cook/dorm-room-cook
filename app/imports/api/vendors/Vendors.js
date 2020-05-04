import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Vendors = new Mongo.Collection('Vendors');

/** Define a schema to specify the structure of each document in the collection. */
const VendorSchema = new SimpleSchema({
  name: String,
  image: String,
  email: String,
  address: String,
  hours: String,
  phone: String,
  priceindex: String,
  website: String,
  coupons: String,
  logo: String,
  likes: Number,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Vendors.attachSchema(VendorSchema);

/** Make the collection and schema available to other code. */
export { Vendors, VendorSchema };

/** Example data */
//     "name": "Longs Drugs",
//     "image": "/images/stores/longs-honolulu.png",
//     "owner": "longsdrugs@foo.com",
//     "address": "2470 S King St\nHonolulu, HI 96826",
//     "hours": "24 Hours",
//     "phone": "(808) 947-2651 ",
//     "priceindex": "$",
//     "website": "/",
//     "coupons": "/",
//     "logo": "https://longs.staradvertiser.com/images/longsheader.png",
//     "likes": 0
