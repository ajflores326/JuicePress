import { Schema, model } from "mongoose";

const awsSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  AWSLink: {
    type: String
  }
});

export default model("AWSdb", awsSchema);
