const express = require('express')

const userSignUpController = require('../controller/userSignUp')
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userSignOut = require('../controller/userSignOut')
const AllUsers = require('../controller/allUsers')

const router = express.Router()



router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get('/user-details', authToken, userDetailsController)
router.get('/signout', userSignOut)


//admin apnel
router.get('/all-users',authToken,AllUsers)


module.exports = router

