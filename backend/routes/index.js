const express = require('express')

const router = express.Router()

const userSignUpController = require("../controllers/user/userSignUp")
console.log(userSignUpController)
const userSignInController = require("../controllers/user/userSignIn")
console.log(userSignInController)
const userDetailsController = require('../controllers/user/userDetails')
console.log(userDetailsController)
const authToken = require('../middleware/authToken')
console.log(authToken)
const userLogout = require('../controllers/user/userLogout')
console.log(userLogout)
const allUsers = require('../controllers/user/allUsers')
console.log(allUsers)
const updateUser = require('../controllers/user/updateUser')
console.log(updateUser)
const UploadProductController = require('../controllers/product/uploadProduct')
console.log(UploadProductController)
const getProductController = require('../controllers/product/getProduct')
console.log(getProductController)
const updateProductController = require('../controllers/product/updateProduct')
console.log(updateProductController)
const getCategoryProduct = require('../controllers/product/getCategoryProductOne')
console.log(getCategoryProduct)
const getCategoryWiseProduct = require('../controllers/product/getCategoryWiseProduct')
console.log(getCategoryWiseProduct)
const getProductDetails = require('../controllers/product/getProductDetails')
console.log(getProductDetails)
const addToCartController = require('../controllers/user/addToCartController')
console.log(addToCartController)
const countAddToCartProduct = require('../controllers/user/countAddToCartProduct')
console.log(countAddToCartProduct)
const   addToCartViewProduct  = require('../controllers/user/addToCartViewProduct')
console.log(addToCartViewProduct)
const updateAddToCartProduct = require('../controllers/user/updateAddToCartProduct')
console.log(updateAddToCartProduct)
const deleteAddToCartProduct = require('../controllers/user/deleteAddToCartProduct')
console.log(deleteAddToCartProduct)
const searchProduct = require('../controllers/product/searchProduct')
const filterProductController = require('../controllers/product/FilterProduct')
const paymentController = require('../controllers/order/paymentController')
const webhooks = require('../controllers/order/webhook')
const orderController = require('../controllers/order/order.controller')
console.log(searchProduct)


router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

//admin panel 
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)
router.post("/upload-product",authToken,UploadProductController)

router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)
//user add to the cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)


//payment and order
router.post('/checkout',authToken,paymentController)
router.post('/webhook',webhooks) //api/webhook
router.get("/order-list",authToken,orderController)



module.exports = router