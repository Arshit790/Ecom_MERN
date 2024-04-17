import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { connect } from 'mongoose'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'
import cors from 'cors'

//configure env
dotenv.config()

//db config
connectDB();

//rest obj
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes 
app.use('/api/v1/auth',authRoutes)



app.get('/', (req,res)=>{
    res.send({
        message : "Welcome to ecommerce app"
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(` Server is Running Fine!! ${port}`.bgCyan.white)
})