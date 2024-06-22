const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Schema (the structure of the customer)
const customerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      default: null,
    },
    phoneNumber: {
      type: Number,
      default: null,
    },
    age: {
      type: Number,
      min: 10,
      max: 100,
    },
    country: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create a model based on that schema
const Customer = mongoose.model("Customer", customerSchema);

// Export the model
module.exports = Customer;
