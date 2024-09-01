const express = require('express');
const routes = express.Router();

const { verifyToken } = require('../helpers/verifyToken');
const {
    addUser,
    getallUsers,
    updateUser,
    registerUser,
    loginUser,
} = require('../controller/user.controller')

const {
    addProduct,
    getAllproducts
} = require('../controller/product.controller');


const {
    addToCart,
    getAllCarts
} = require('../controller/carts.controller')


// routes.post("/add", addUser);

routes.get('/all', getallUsers);

routes.put('/update', verifyToken, updateUser);

routes.post('/register', registerUser)

routes.get('/login', loginUser)

routes.post('/addproduct', addProduct)

routes.get('/allproduct', getAllproducts)

// -------------------- cart ------------------

routes.post('/addcart', verifyToken, addToCart);

routes.get('/allcart', verifyToken, getAllCarts);


module.exports = routes;

