import { Router } from 'express';
import auth from '../middlewares/auth.js';
import upload from '../middlewares/multer.js';
import { createProduct, DeleteProduct, getAllFeturedProduct, getAllProduct, getAllProductByCatId, getAllProductByCatName, getAllProductByPrice, getAllProductByRating, getAllProductBySubCatId, getAllProductBySubCatName, getAllProductByThirdLevelCatId, getAllProductByThirdLevelCatName, getAllProductCount, getProduct, removeImageFromCloudinary, updateProduct, uploadImages } from '../controller/product.controller.js';

const productRouter = Router();

productRouter.post('/uploadImages', auth, upload.array('images'), uploadImages)
productRouter.post('/create', auth, createProduct);
productRouter.get('/getAllProducts', getAllProduct);
productRouter.get('/getAllProductsByCatId/:id', getAllProductByCatId);
productRouter.get('/getAllProductsByCatName', getAllProductByCatName);
productRouter.get('/getAllProductsBySubCatId/:id', getAllProductBySubCatId);
productRouter.get('/getAllProductsBySubCatName', getAllProductBySubCatName);
productRouter.get('/getAllProductsByThirdLevelCat/:id', getAllProductByThirdLevelCatId);
productRouter.get('/getAllProductsByThirdLevelCatName', getAllProductByThirdLevelCatName);
productRouter.get('/getAllProductsByPrice', getAllProductByPrice);
productRouter.get('/getAllProductsByRating', getAllProductByRating);
productRouter.get('/getAllProductsCount', getAllProductCount);
productRouter.get('/getAllFeaturedProducts', getAllFeturedProduct);
productRouter.delete('/:id', DeleteProduct);
productRouter.get('/:id', getProduct);
productRouter.delete('/deleteImage', auth, removeImageFromCloudinary);
productRouter.put('/updateProduct/:id', auth, updateProduct);

export default productRouter;
