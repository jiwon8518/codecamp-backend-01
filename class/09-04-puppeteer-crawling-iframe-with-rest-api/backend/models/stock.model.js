import Mongoose from "mongoose";

const stockSchema = new Mongoose.Schema({
    name: String,
    date: Date,
    price: Number
});

export const Stock = Mongoose.model("Stock", stockSchema);