const {model}=require('mongoose');

const {PositionsSchema}=require('../schemas/PositionsSchema');

const PositionsModel= model("PositionsModel",PositionsSchema);

module.exports={PositionsModel};