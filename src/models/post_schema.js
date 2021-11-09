import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postSchema = new Schema(
  {
    category: { type: String },
    title: { type: String, required: true },
    cover: { type: String },
    readTime: {
      value: { type: Number },
      unit: { type: String, default: "minutes" },
    },
    author: {
      name: { type: String },
      avatar: { type: String },
    },
    content: { type: String },
  },
  {
    timestamps: true, // adds and manage createdAt and updatedAt fields
  }
);

export default model("Post", postSchema); // linked to the "posts" collection, if the collection is not there it will be automagically created
