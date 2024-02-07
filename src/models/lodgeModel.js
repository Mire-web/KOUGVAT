import mongoose from "mongoose";

const lodgeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Must be provide lodge name."],
    },
    location: {
      type: String,
      required: [true, "Lodge must have a location."],
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    star: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    longDescription: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "LodgeDetail",
  }
);
