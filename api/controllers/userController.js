const UserModel = require('../models/userModel')
const createError = require('../utils/error')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports.signup = async (req, res, next) => {
    try {
        const userData = req.body
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(userData.password, salt);
        await UserModel.create(userData)
        res.status(201).json({
            status: 'signup completed'
        })
    } catch (err) {
        console.log(err)
        if (err.code === 11000) {
            err.message = 'Email or Mobile number is already registered'
            return next(createError(400, err.message))
        }
        next(err)
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const maxAge = 60 * 60 * 24;
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email })
        console.log(user,"data")

        if (user) {
            const passwordCheck = await bcrypt.compare(password, user.password)
            if (passwordCheck) {
                const token = jwt.sign({ userId: user._id }, process.env.TOKEN_KEY, { expiresIn: maxAge })
                res.cookie("jwt", token, {
                    withCrdentials: true,
                    httpOnly: false,
                    maxAge: maxAge * 1000
                })
                res.status(201).json({Id: user._id, name: user.name,email:user.email,mobile:user.mobile})
            } else {
                res.status(401).json({status:'inavalid password'})
            }
        } else {
            res.status(401).json({status:'inavalid email'})
        }
    } catch (error) {
        console.log(error)
    }
}