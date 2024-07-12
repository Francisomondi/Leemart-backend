const express = require('express')

const userSignUpController = require('../controller/userSignUp')
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userSignOut = require('../controller/userSignOut')
const AllUsers = require('../controller/allUsers')
const updateUser = require('../controller/updateUser')
const UploadProductController = require('../controller/uploadProduct')
const getProductController = require('../controller/getProduct')
const updateProductController = require('../controller/updateProduct')

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



module.exports = router

