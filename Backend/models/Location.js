const mongoose = require("mongoose");
const { Schema } = mongoose;

  const locationSchema =new Schema({
      lng:Number,
      lat:Number,
      desc:String,
      date:String,
  });
mongoose.model("location", locationSchema);
