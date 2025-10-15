import express from 'express'
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders } from '../controllers/orders.controller.js';
import adminAuth from '../midlwere/adminAuth.js'
import authUser from '../midlwere/auth.js'

const  orderRouter = express.Router();

// admin future
orderRouter.post('/list' ,adminAuth , allOrders)
orderRouter.post('/status' ,adminAuth , updateStatus)

// payment future
orderRouter.post('/place' , authUser , placeOrder)
orderRouter.post('/stipe' , authUser , placeOrderStripe)
orderRouter.post('/razorpay' , authUser , placeOrderRazorpay)


// user future
orderRouter.post('/userorders',authUser , userOrders);

export default orderRouter;
