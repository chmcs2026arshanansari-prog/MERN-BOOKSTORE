import express from "express";
import dotenv from "dotenv";
import bookRoutes from "../routes/bookRoutes.js"
dotenv.config()
const app=express();
const port=process.eventNames.port


app.use(express.json())
app.use("/books", bookRoutes)

connectDB().then(()=>{

    app.listen(port, ()=>{
        console.log("Server started on 5001")
        console.log( 'http://localhost:${port}/books')
    })
})