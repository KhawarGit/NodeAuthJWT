import mongoose , { Schema, mongo } from "mongoose";

const bookSchema = new Schema(
    {

    }
);

export const Book = mongoose.model("Book", bookSchema)