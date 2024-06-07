import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.routes.js" 
import userRoute from "./routes/product.routes.js"
import productRoute from "./routes/user.routes.js"
import invoiceRoute from "./routes/invoice.routes.js"
dotenv.config();

const app = express()
 
const corsOptions = {
  credentials: true,
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

// Set endpoints


//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/invoice", invoiceRoute);
const DatabaseConnection = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Connected to mongoDB.");
    } catch {
      console.log("Connection Error");
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected!");
  });
  

app.get("/", (req, res)=>{
res.json({message:"Hello"})
})

const port = process.env.PORT || 5000;



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
  console.log(`Server Listen on port ${port}`);
  console.log("Connected to backend.");
});