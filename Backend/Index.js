import express from "express";
import dotenv from "dotenv"; //for running the 4001 port bydefault
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000; //Code for Port If port 4000 is not working then shift to 4001
const URI = process.env.MongoDBURI; //Called MongoDBURI from .env

//connect to mongoDB
try {
  mongoose.connect(URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connect to MongoDB");
} catch (error) {
  console.log("Error:", error);
}

//defining route
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
