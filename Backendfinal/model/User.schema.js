import mongoose from "mongoose";

const userSchema = mongose.Schema({
    name: {
        type: String,
        reuqire: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    pasword: {
        unique: true,
        type: String,
        require: true
    }
})
const User = mongoose.model("User", userSchema);
export default User;