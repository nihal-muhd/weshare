const express = require('express')
const dotenv = require('dotenv').config({ path: '../.env' })
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')
const colors = require('colors')

const app = express()
connectDB()


/*routes*/
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')

const port = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())

app.use('/', userRouter)
app.use('/admin', adminRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`server started to port ${port}`.brightBlue))
