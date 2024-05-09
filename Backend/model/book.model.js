import mongoose from "mongoose";

//Creating Schema 
const bookSchema = mongoose.Schema({
    name : String,
    title : String,
    price : Number,
    category : String,
    image : String,
})

//Adding these schema into model

const Book = mongoose.model("Book" , bookSchema);


export default Book;
