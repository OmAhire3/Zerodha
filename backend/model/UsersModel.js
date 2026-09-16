const {model} = require('mongoose')
const {userSchema} = require('../schemas/UserSchema');

const userModel=model("userModel",userSchema);

module.exports={userModel};