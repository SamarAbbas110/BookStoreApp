import mongoose from "mongoose";

//UserSchema for Authentication
const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//Making schema to Model
const User = mongoose.model("User", userSchema);
export default User;
