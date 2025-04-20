// Database connection and express(from app there we intialize and then call here)

import dotenv from 'dotenv'
import { app } from './app.js'
import connectDB from './db/index.js'


dotenv.config({
    path:'./.env'
})

const port = process.env.PORT


connectDB()
.then(() => {
    app.listen(port,() => {
        console.log(` Server Is  Running at ${port}`);
    })
})
.catch((err)=>{
    console.log(`MONGODB connection failled!!!`, err)
})