import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
    },
    total: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Completed', 'Pending', 'Shipped', 'Cancelled'],
        required: true,
    },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
