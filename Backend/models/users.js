const {Schema, Types, model} = require("mongoose");

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required:true, select:false},
    name: {type: String, required:true}
});


const User =  model("User", userSchema);


module.exports = {
    User,
};