
'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (mongoose) => {
  const bcrypt = require('bcryptjs');
  const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  }, { timestamps: true });

  UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

  UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  return mongoose.model('User', UserSchema);
};


