// server.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// MongoDB connection function
const DatabaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Connection Error:", error);
        process.exit(1); // Exit the process with failure
    }
};


mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected.');
});

mongoose.connection.on('error', (error) => {
    console.error('MongoDB Connection Error:', error);
});

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  
// Define routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    DatabaseConnection();
    console.log(`Server is running on port ${port}`);
    console.log('Backend is started');
});

