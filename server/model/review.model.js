const mongoose = require('mongoose');

// Define the schema for a review
export const reviewSchema = new mongoose.Schema({
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
       type:mongoose.Schema.ObjectId,
       ref:'User',
       required:true,
    },
    product: {
      type:mongoose.schema.ObjectId,
      ref:'Product',
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

// or you Create a model using the schema in this method also
// export const reviewModel=mongoose.model('Review',reviewSchema);

