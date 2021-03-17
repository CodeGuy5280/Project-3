const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meditationSchema = new Schema({
  img: {type: String, required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  video: {type: String, required: true}
//   date: { type: Date, default: Date.now }
});

const Meditation = mongoose.model("Meditation", meditationSchema);

module.exports = Meditation;