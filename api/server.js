const express = require("express") ;
const mongoose = require('mongoose') ;

const app = express() ;

const instructors = require("./routers/instructors")

const PORT = 5000 ;
const URI = "mongodb://localhost:27017/test"

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use("/instructors",instructors)

mongoose.connect(URI , { useNewUrlParser: true ,useUnifiedTopology: true } , (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("mongoDB is connected")
    }
})

app.listen(PORT , () => console.log(`server listening on port ${PORT}`))