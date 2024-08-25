import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true,   
  },
  subscribedAt: {
    type: Date,
    default: Date.now, 
  },
  name: {
    type: String,
    trim: true,   
  },
  preferences: {
    type: Array,  
    default: [],  
  }
});

export const Newsletter = mongoose.model("Newsletter", newsletterSchema);
