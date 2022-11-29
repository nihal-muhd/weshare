const jwt = require('jsonwebtoken')

const adminDetails = {
    adminID: process.env.ADMIN_ID,
    password: process.env.ADMIN_PASSWORD
}

module.exports.adminLogin = async (req, res, next) => {
    try {
        const maxAge = 60 * 60 * 24;
        const { adminId, password } = req.body;
        if (adminId === adminDetails.adminID && password === adminDetails.password) {
            const adminToken = jwt.sign({ adminID: adminId }, process.env.TOKEN_KEY, { expiresIn: maxAge })
            res.cookie("adminjwt", adminToken, {
                withCrdentials: true,
                httpOnly: false,
                maxAge: maxAge * 1000
            })
            res.status(201).json({ adminID: adminId, status: true })
        } else {
            res.status(401).json({status:'inavalid password or id'})
        }

    } catch (error) {
        console.log(error);
    }

}