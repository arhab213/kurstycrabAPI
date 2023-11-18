import mongoose from "mongoose";
const employee = mongoose.Schema({
  name: { type: String },
  age: {
    type: Number,
  },
  dateOfBirth: {
    type: Date,
  },
  gender: { type: String },
});
export default mongoose.model("employee", employee);
