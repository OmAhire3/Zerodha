import React from "react";
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import axios from "axios";
import { Orderchart } from "./OrderChart";
import { Filler } from "chart.js";



const Orders = () => {
  const [orders,setOrders]=useState([]);
  const [showOrders,setShowOrders]=useState(false)
  useEffect(() => {
        axios.get("http://localhost:3002/allOrders")
            .then((res) => {
                setOrders(res.data);
            });
    }, []);

    const handleOrderClick = () => {
    setShowOrders(true);
  };

const labels = orders.map((order) => order.qty);
const data = {
  labels: orders.map((order) => order.name),
  datasets: [
    {
      fill: true,
      label: orders.map((order) => order.name).join(", "),
      data: orders.map((order) => order.qty),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
//    const data = {
//   labels,
//   datasets: [
//     {
//       fill: true,
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };


  return (

    <div className="text-center" >
      <Orderchart data={data} />
      <div>
        <h5>View your placed orders and track their details here.</h5>
        <button type="button" class="btn btn-primary" onClick={handleOrderClick} style={{background:"#387ED1"}}>My orders</button>
        <div className="orders-container" >
          {
          showOrders&& orders.map((order) => {
            return (
                <div className="orderbox" style={{background:"#fff"}}>
                    <h4 style={{borderBottom: "1px solid #ddd"}}>{order.name}<p style={{fontSize:"10px"}}>Order</p></h4>
    
                    <p  style={{borderBottom: "1px solid #ddd"}}>{order.qty}<p style={{fontSize:"10px"}}>Qty</p></p>
                    <p>&#8377;{order.price}</p >
                    <p>{order.mode}</p>
                </div>

                
            );  
        })}
        </div>
      </div>
    </div>

    

  );
};

export default Orders;
