// require mongoose and destructor Schema and model from it
const { Schema, model } = require("mongoose");
//Create a viking schema here

const cavemanSchema = new Schema({
    firstname: {
      type: String,
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref:"dino",
    }
    weapon: 

  });
  
  const VikingModel = model("viking", vikingSchema);
  module.exports = VikingModel;
