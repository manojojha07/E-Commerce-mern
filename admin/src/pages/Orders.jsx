import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendURL , curruncy} from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);


  const fetchAllOrder = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        `${backendURL}/api/order/list`,
        {},
        { headers: { token } }
      );

      // console.log("response data fetch api : ", response);

      // ✅ UNCOMMENT THIS BLOCK
      if (response.data.orders) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error("No orders found");
      }

    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const statusHandler =async(event ,orderId)=>{
   try {
    const responce = await axios.post(`${backendURL}/api/order/status` , 
      {orderId, status:event.target.value}
       ,{headers:{token}})
  //  console.log(responce);
    if(responce.data.success){
    await fetchAllOrder()
   }
  } catch (error) {
    toast.error(responce.data.message)
   }
  }


  useEffect(() => {
    fetchAllOrder();
  }, [token]);

  return (
    <div className='w-[90%]'> <h3>Oreder Page</h3>
      <div className="">
        {orders.map((order, index) => (
          <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 border p-8 
          my-3 md:my-4 border-gray-200 items-start text-xs sm:text-sm text-gray-600" key={index}>
            <img className='w-12' src={assets.parcel_icon} alt="" />
            <div className="">
              <div className="">
              {
                order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return <p className='py-0.5' key={index}> {item.name} X {item.quantity} <span>{item.size}</span></p>
                  }
                  else {
                    return <p className='py-0.5' key={index}> {item.name} X {item.quantity} <span>{item.size} </span> ,</p>
                  }
                })
              }
            </div>
            <p className='mt-3 mb-2 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>
            <div className="">
              <p>{order.address.street + ","}</p>
              <p>{order.address.city + "," + order.address.state + "," + order.address.zipcode}</p>
            </div>
            <p>{order.address.phone}</p>
          </div>
          <div className="">
            <p className='text-sm sm:text-[15px]'>Items : {order.items.length }</p>
            <p className='mt-3'>Method : {order.paymentMethod} </p>
            <p>Payment : {order.payment ? 'Done' : 'Pending' }</p>
            <p>Date : {new Date(order.date).toLocaleDateString()}</p>
          </div>
          <p className='text-sm sm:text-[15px]'> {curruncy} {order.amount} </p>
          <select onChange={(event) => statusHandler(event ,order._id)} value={order.status} className='p-2 font-semibold'>
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipping">Shipping</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Orders;
