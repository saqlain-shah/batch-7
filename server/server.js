import express from "express"

const app = express()

app.get ('/',(req , res )=>{
    res.json({message:"Hello From Backend App"})
})

app.listen(5000, ()=>{
    console.log("Express Server is started ")
})