import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Men', 'Women', 'Child']
  },
  payement: {
    type: String,
    required: true,
    enum: ['paid', 'unpaid', 'pending']
  },
  subCategory: {
    type: String,
    required: true,
    enum: ['Shirt', 'Pants', 'Dress', 'Jacket', 'Skirt', 'Shorts', 'Other']
  },

  size: {
    type: String,
    required: true,
    enum: ['small', 'medium', 'large']
  },
  color: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  brand: {
    type: String,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  images: [{
    type: String
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model using the schema
export default mongoose.model('Product', ProductSchema);


