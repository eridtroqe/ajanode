const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  sip: { type: String, required: true},
  typology: { type: String, required: true},
  rooms: { type: String, required: true},
  toilets: { type: String, required: true},
  floor: { type: String, required: true},
  type: { type: String, required: true},
  price: { type: String, required: true},
  exclusive: { type: Boolean, required: true, default: false},
  position: {type: String},
  imagePath: [{ type: String, required: true }],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", postSchema);

// creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }