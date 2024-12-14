const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  stripeCustomerId: { type: String }, // Add this field
  stripeSessionId: { type: String },
  stripeSessionTestId: { type: String },
  // verified: {
  //   type: Boolean,
  //   default: false,
  // },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  // logo: {
  //   type: String,
  //   default: ""
  // },
  level: {
    type: String,
    default: 'STARTER',
  },

});

// Hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);
