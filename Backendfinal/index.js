import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
import cors from "cors";

const app = express();

dotenv.config();

const URL = process.env.MongoDBURI
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

try {
    mongoose.connect(URL, );
    console.log("Mongo connected sucessful")
} catch (error) {
    console.log(error)

}

app.use("book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
    console.log(`This is running on ${PORT}`)
})