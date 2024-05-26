import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './module/products/product.route';
import ordersRouter from './module/orderManege/orders.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routers
app.use('/api/products', productRouter);
app.use('/api/orders', ordersRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    "success": false,
    "message": "Route not found"
  });
});

export default app;
