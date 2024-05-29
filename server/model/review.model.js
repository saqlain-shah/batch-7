const mongoose = require('mongoose');

// Define the schema for a review
const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        //required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
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

// Create a model using the schema
export default mongoose.model('Review', reviewSchema);

