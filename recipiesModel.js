import mongoose from "mongoose";

const userModel = mongoose.Schema({
  Title: {
    type: String,
  },
  ingridients: [{ type: String }],
});
export default mongoose.model("recipies", userModel);
