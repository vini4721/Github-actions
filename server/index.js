import express from 'express'

const app = express()

app.get("/", (req,res) => {
    return res.send("hello")
})

app.listen(3000, () => {
    console.log("server is running");
})