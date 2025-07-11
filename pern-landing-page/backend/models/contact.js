'use strict';
const {
  Model
} = require('sequelize');
module.exports = (mongoose) => {
  const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  }, { timestamps: true });

  return mongoose.model('Contact', ContactSchema);
};