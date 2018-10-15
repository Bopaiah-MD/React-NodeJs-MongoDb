const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create a ninja schema & model

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "name feild is required"]
  },
  rank: {
    type: String
  },
  availaibility: {
    type: Boolean,
    default: false
  }
});

// add in geo-location 


const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;