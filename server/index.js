import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Middleware to handle JSON parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    // Handle JSON Syntax Error
    console.error('JSON Syntax Error:', err.message);
    return res.status(400).json({
      success: false,
      status: 400,
      message: "Invalid JSON format. Please ensure all property names are enclosed in double quotes.",
    });
  }
  next(err); // Pass the error to the next error handler
});

const DatabaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.error("Connection Error:", error.message);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected!");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

const port = process.env.PORT || 8000;

// General Error Handling Middleware
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

app.listen(port, () => {
  DatabaseConnection();
  console.log(`Server listening on port ${port}`);
  console.log("Connected to backend.");
});
