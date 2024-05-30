import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true,
      unique: true,
      trim: true
  },
  email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
  },
  password: {
      type: String,
      required: true
  },
  firstName: {
      type: String,
      required: true,
      trim: true
  },
  lastName: {
      type: String,
      required: true,
      trim: true
  },
  address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      postalCode: { type: String, trim: true },
      country: { type: String, trim: true }
  },
  phone: {
      type: String,
      trim: true
  },
  roles: {
      type: [String],
      default: ['user']
  },
  dateOfBirth: {
      type: String
  },
  createdAt: {
      type: Date,
      default: Date.now
  },
  updatedAt: {
      type: Date,
      default: Date.now
  }
});


export default mongoose.model('User', userSchema);
