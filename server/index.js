import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/connectDb.js';
import userRouter from './routes/user.route.js';
import categoryRouter from './routes/category.route.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';

dotenv.config();

const app = express();

app.use(cors());
//✅ Handles all CORS + preflight — no need for app.options()
app.use(cors({
  origin: '*', 
  credentials: true,
}))
app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.get('/', (req, res) => {
  res.json({ message: 'Running on ' + process.env.PORT });
});
app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);


connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
  });
});
