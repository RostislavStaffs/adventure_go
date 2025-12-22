const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    destination: { type: String, required: true },
    arrivalDate: { type: String, required: true },   
    departureDate: { type: String, required: true },

    tripName: { type: String, required: true },
    summary: { type: String, default: "" },

    
    coverImage: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", TripSchema);
