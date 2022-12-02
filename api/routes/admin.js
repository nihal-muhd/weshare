const express = require('express')
const router = express.Router()
const {adminLogin,getUser, blockUser}=require('../controllers/adminController')

router.post('/login', adminLogin)
router.get('/getUser', getUser)
router.post('/blockUser', blockUser)

module.exports = router