const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  Adderss: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  
});
 
module.exports = mongoose.model("Profile", ProfileSchema);
