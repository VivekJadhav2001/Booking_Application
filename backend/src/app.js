// this file is for middleware usage and route
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(cors({
    // origin:process.env.CORS_ORIGIN,
    origin:"http://localhost:5173",
    credentials:true,
}))

app.use(express.json({
    limit:'16kb'
}))
app.use(express.urlencoded({
    extended:true,
    limit:'16kb'
}))

app.use(cookieParser())


//routes import 
import userRouter from './routes/users.routes.js'
import hotelRouter from './routes/hotels.routes.js'
import roomRouter from './routes/room.routes.js'

//routes declaration
app.use("/api/v1/user",userRouter)
app.use("/api/v1/hotel",hotelRouter)
app.use("/api/v1/room",roomRouter)

export {app}