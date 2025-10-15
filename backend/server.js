import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './src/config/db.config.js';
import connectCloudinary  from './src/config/cludenairy.js'
import userRouter from './src/routes/userRoute.js';
import productRouter from './src/routes/productRoute.js';
import cartRouter from './src/routes/catRoutes.js';
import orderRouter from './src/routes/orderRute.js';



//   APP CONFIG
const app = express();
const port = process.env.PORT || 5000 ;
connectDB();
connectCloudinary();
 
// midelweres
app.use(express.json())
app.use(cors());

// api end point 

app.use('/api/auth' , userRouter)
app.use('/api/product' , productRouter)
app.use('/api/cart' , cartRouter)
app.use('/api/order' , orderRouter)


app.get('/' , (req, res) => {
    res.send("API WORKING SUCESS ! ")
})

// strating serever 
app.listen(port ,() =>{
    console.log(`http://localhost:${port}`);    
})