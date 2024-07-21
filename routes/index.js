const express = require('express')

const userSignUpController = require('../controller/user/userSignUp')
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userSignOut = require('../controller/user/userSignOut')
const AllUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getProductCategory = require('../controller/product/getSingleProductCategory')
const getCategoryProducts = require('../controller/product/getCategoryProducts')

const router = express.Router()



router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get('/user-details', authToken, userDetailsController)
router.get('/signout', userSignOut)


//admin panel
router.get('/all-users',authToken,AllUsers)
router.post('/update-user',authToken,updateUser)

//add products route
router.post('/upload-product', authToken, UploadProductController)
router.get('/get-product', getProductController)
router.post('/update-product',authToken,updateProductController)
router.get('/getProductCategory', getProductCategory)
router.post('/category-products', getCategoryProducts)



module.exports = router

