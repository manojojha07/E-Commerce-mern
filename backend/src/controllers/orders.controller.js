import orderModel   from '../models/order.model.js'
import userModel from '../models/user.model.js'

// -----------------using sripe genrate key and code is final working -----

// import Stripe from 'stripe'

// --------------create rozor pay and create key and paest here-----

// const Razorpay = require('razorpay');
// const crypto = require('crypto'); // Used for payment verification (optional)

// const razorpay = new Razorpay({
//   key_id: 'rzp_test_YourKeyHere', // Replace with your Razorpay test key
//   key_secret: 'your_key_secret_here'
// });


// globle veibles 
const currency = 'inr';
const deliveryCharge = 10;

// const stripe = new Stripe(process.env.STRPE_SERTET_KEY);

// places order using cod menthod
const placeOrder = async (req, res) => {
  try {
      // <-- get from middleware
    const {userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: 'COD',
      payment: false,
      date: Date.now()
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};


// places order using strip menthod
// const placeOrderStripe = async (req , res) => {
//   try {
//     const { userId ,items, amount, address}= req.body;
//     const { origin } = req.headers;
//      const orderData = {
//       userId,
//       items,
//       amount,
//       address,
//       paymentMethod: 'COD',
//       payment: false,
//       date: Date.now()
//     };
// const newOrder = new orderModel(orderData);
//     await newOrder.save();
//     const line_items = items.map((item)=> ({
//        price_data:{
//         currency:currency,
//         product_data : {
//           name:item.name
//         },
//         unit_amount:item.price * 100
//       },
//       quantity:item.quantity
//     }))
//     line_items.push({
//         price_data:{
//         currency:currency,
//         product_data : {
//           name:"Delivery Charges"
//         },
//         unit_amount:deliveryCharge * 100
//       },
//       quantity:1
//     })

//     const sesstion = await stripe.checkout.sessions.create({
//       success_url:`${origin}/verify?success =true&orderId = ${newOrder._id}`,
//       cancel_url:`${origin}/verify?success =false&orderId = ${newOrder._id}`,
//       line_items,
//       mode : 'payment',
// })
// res.json({success:true , sesstion_url:sesstion.url})
//   } catch (error) {
//    res.status(500).json({ success: false, message: error.message });  }
// }
const placeOrderStripe =async()=>{}
const placeOrderRazorpay =async()=>{}


// places order using razorpay menthod
// const placeOrderRazorpay = async (req , res) => {
//     try {
//     const { userId, items, amount, address } = req.body;

//     // Optional: Create order in your DB (with 'pending' payment status)
//     const orderData = {
//       userId,
//       items,
//       amount,
//       address,
//       paymentMethod: 'Razorpay',
//       payment: false,
//       date: Date.now()
//     };

//     const newOrder = new orderModel(orderData);
//     await newOrder.save();

//     // Razorpay needs amount in paise (multiply by 100)
//     const razorpayOrder = await razorpay.orders.create({
//       amount: amount * 100, // ₹500 = 50000 paise
//       currency: 'INR',
//       receipt: `receipt_order_${newOrder._id}`,
//       notes: {
//         orderId: newOrder._id.toString(),
//         userId: userId
//       }
//     });

//     // Send order info back to frontend
//     res.json({
//       success: true,
//       razorpayOrderId: razorpayOrder.id,
//       amount: razorpayOrder.amount,
//       currency: razorpayOrder.currency,
//       orderId: newOrder._id,
//       key: 'rzp_test_YourKeyHere' // Send public key to frontend
//     });

//   } catch (error) {
//     console.error('Razorpay order error:', error.message);
//     res.status(500).json({ success: false, message: error.message });
//   }
// }



// all order data for admin panle
const allOrders = async(req , res) => {
  try {
    const orders = await orderModel.find({})
    res.json({message :true , orders})
  } catch (error) {
    
  }
}


// user order data for frontend
const userOrders = async(req , res) => {
  try {
    const {userId } = req.body;
    const orders = await orderModel.find({userId});
    res.json({success:true , orders})
  } catch (error) {
     console.error(error);
    res.json({ success: false, message: error.message });
  }
}


// update status only admin 
const updateStatus = async(req , res) => {
 
  try {
   const {orderId , status} = req.body;
   await orderModel.findByIdAndUpdate(orderId ,{ status});
   res.json({success:true , message:"Status Updated "})
  } catch (error) {
    res.json({success:false , message:error.message})
  }
}

export {placeOrder ,placeOrderStripe ,placeOrderRazorpay,allOrders,userOrders,updateStatus}