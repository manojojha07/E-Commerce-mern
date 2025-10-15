import express from 'express'
import { addToCart, getUserCart, updateCart } from '../controllers/cart.conroller.js';
import authUser from '../midlwere/auth.js';


const cartRouter = express.Router();

cartRouter.post("/get", authUser , getUserCart)
cartRouter.post("/update", authUser , updateCart)
cartRouter.post("/add", authUser , addToCart)

export default cartRouter;