import express from 'express'
import { addProduct, listProduct, removeProduct, singleProduct } from '../controllers/productController.js';
import upload from '../midlwere/multer.js'
import adminAuth from '../midlwere/adminAuth.js';

const productRouter = express.Router();

const imagesStore = upload.fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
  { name: "image4", maxCount: 1 },
]);


productRouter.post('/add', adminAuth, imagesStore, addProduct);
productRouter.post('/remove' , removeProduct)
productRouter.get('/list', listProduct);
productRouter.post('/single' , singleProduct);

export default productRouter;