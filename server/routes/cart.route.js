import { Router } from 'express';
import auth from '../middlewares/auth.js';
import { addToCartItemController, deleteCartItemController, getCartItemController, updateCartItemController } from '../controller/cart.controller.js';

const cartRouter = Router();

cartRouter.post('/add', auth, addToCartItemController)
cartRouter.get('/get', auth, getCartItemController)
cartRouter.put('/update-qty', auth, updateCartItemController)
cartRouter.delete('/delete-cart-item', auth, deleteCartItemController)

export default cartRouter;