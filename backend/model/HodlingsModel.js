const {model} =require("mongoose");

const {HoldingsSchema} =require('../schemas/HoldingsSchema.js')

const HodlingsModel = model("holding",HoldingsSchema);

module.exports={HodlingsModel};