import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../config/db.config.js';
import connectCloudinary  from '../config/cludenairy.js';
import userRouter from '../routes/userRoute.js';
import productRouter from '../routes/productRoute.js';
import cartRouter from '../routes/catRoutes.js';
import orderRouter from '../routes/orderRute.js';

const server = () => {
  const app = express();

  connectDB();
  connectCloudinary();

  app.use(express.json());
  app.use(cors());

  app.use('/api/auth', userRouter);
  app.use('/api/product', productRouter);
  app.use('/api/cart', cartRouter);
  app.use('/api/order', orderRouter);

  app.get('/', (req, res) => {
    res.send("API WORKING SUCCESS!");
  });

  return app;
};

export default server;
