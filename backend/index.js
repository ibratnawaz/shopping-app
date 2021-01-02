import dotenv from 'dotenv';
import express from 'express';
import products from './data/products.js';

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json('API running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((obj) => obj._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
