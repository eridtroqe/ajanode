const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  city: {type: String, required: true},
  property_type: {type: String},
  description: { type: String, required: true },
  address: { type: String, required: true },
  sip: { type: Number},
  typology: { type: String},
  rooms: { type: Number},
  areas: { type: Number},
  toilets: { type: Number},
  floor: { type: Number},
  type: { type: String, required: true},
  price: { type: Number},
  rented: {type: Boolean, default: false},
  sold: {type: Boolean, default: false},
  prenoted: {type: Boolean, default: false},
  exclusive: { type: Boolean, required: true, default: false},
  position: {type: Number, default: 0},
  imagePath: [{ type: String, required: true }],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", postSchema);

// creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }