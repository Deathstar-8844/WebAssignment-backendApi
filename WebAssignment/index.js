const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Importing models and controller functions
const User = require('./models/userSchema');
const Product = require('./models/productSchema');
const Order = require('./models/orderSchema');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const orderController = require('./controllers/orderController');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/backendweb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(bodyParser.json());

// Routes for users
app.post('/users', userController.createUser);
app.get('/users', userController.getUsers);
app.get('/users/:id', userController.getUserById);

// Routes for products
app.post('/products', productController.createProduct);
app.get('/products', productController.getProducts);
app.get('/products/:id', productController.getProductById);

// Routes for orders
app.post('/orders', orderController.createOrder);
app.get('/orders', orderController.getOrders);
app.get('/orders/:id', orderController.getOrderById);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
