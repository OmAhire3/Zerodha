const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app= express();
const {HodlingsModel} = require('./model/HodlingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel}=require('./model/OrdersModel')
const bodyParser = require('body-parser');
const cors = require('cors');
const { userModel } = require('./model/UsersModel');
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;


app.use(cors());
app.use(bodyParser.json())

// app.get('/addPositions',async(req,res)=>{
//     let newPosition=
//     [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 520.5,
//             price: 545.25,
//             net: "+4.75%",
//             day: "+1.35%",
//             isLoss: false,
//         },
//         {
//             product: "MIS",
//             name: "TATAMOTORS",
//             qty: 5,
//             avg: 790.25,
//             price: 785.4,
//             net: "-0.61%",
//             day: "-1.15%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "INFY",
//             qty: 3,
//             avg: 1495.5,
//             price: 1555.45,
//             net: "+4.01%",
//             day: "-1.60%",
//             isLoss: false,
//         },
//         {
//             product: "MIS",
//             name: "RELIANCE",
//             qty: 2,
//             avg: 2800.25,
//             price: 2850.5,
//             net: "+1.79%",
//             day: "+0.85%",
//             isLoss: false,
//         },
//         {
//             product: "CNC",
//             name: "WIPRO",
//             qty: 4,
//             avg: 500.4,
//             price: 485.3,
//             net: "-3.02%",
//             day: "-0.65%",
//             isLoss: true,
//         },
//         {
//             product: "MIS",
//             name: "SBIN",
//             qty: 6,
//             avg: 780.25,
//             price: 812.45,
//             net: "+4.13%",
//             day: "+1.05%",
//             isLoss: false,
//         },
//         {
//             product: "CNC",
//             name: "ICICIBANK",
//             qty: 3,
//             avg: 1250.5,
//             price: 1285.6,
//             net: "+2.81%",
//             day: "+0.72%",
//             isLoss: false,
//         },
//     ]


//     newPosition.forEach((item) => {
//         let newHolding = new P({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss
//         });

//         newHolding.save();
//     });
//     res.send("Position Saved")
// })


// app.get('/addholdings',async(req,res)=>{
//     let tempHoldings= 
//     [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 4,
//             avg: 2450.5,
//             price: 2560.75,
//             net: "+4.50%",
//             day: "-0.25%",
//         },
//         {
//             name: "TATA MOTORS",
//             qty: 10,
//             avg: 720,
//             price: 650,
//             net: "-9.72%",
//             day: "-1.20%"
//         },
//         {
//             name: "INFY",
//             qty: 5,
//             avg: 1650,
//             price: 1520,
//             net: "-7.88%",
//             day: "-0.85%"
//         },
//         {
//             name: "HDFCBANK",
//             qty: 8,
//             avg: 1750,
//             price: 1600,
//             net: "-8.57%",
//             day: "-1.10%"
//         },
//         {
//             name: "INFY",
//             qty: 3,
//             avg: 1480.2,
//             price: 1555.45,
//             net: "+5.08%",
//             day: "-1.60%",
//         },
//         {
//             name: "TCS",
//             qty: 2,
//             avg: 3050.5,
//             price: 3194.8,
//             net: "+4.73%",
//             day: "-0.25%",
//         },
//     ];

//     tempHoldings.forEach((item)=>{
//         let newHolding=new HodlingsModel({
//             name: item.name,
//             qty:item.qty,
//             avg:item.avg,
//             price:item.price,
//             net:item.net,
//             day:item.day    
//         });
//         newHolding.save();  
//     })

//     res.send("Done!")
// })


app.get('/allHoldings',async(req,res)=>{
    let allHoldings= await HodlingsModel.find({});
    res.json(allHoldings)
})


app.get('/allPositions',async(req,res)=>{
    let allPositions= await PositionsModel.find({});
    res.json(allPositions)
})

app.post("/newOrder", async(req,res)=>{
    let newOrder=new OrdersModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode
    })

    await newOrder.save();
    res.send("new order placed")
})


app.post("/signUp", async (req, res) => {
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        let newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        await newUser.save();

        res.send("User registered successfully");

    } catch (err) {
        console.log(err);
        res.status(500).send("Error registering user");
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email: email });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        res.json({
            message: "Login successful",
            success: true,
            username: user.username
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

app.get("/allOrders",async(req,res)=>{
    let allOrder=await OrdersModel.find({});
    res.json(allOrder);
})


app.listen(PORT,()=>{
    console.log("App sarted!");

    mongoose.connect(url)
    console.log("DB Connected!")
})
